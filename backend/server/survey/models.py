import json
from django import forms
from django.utils import timezone
from django.utils.translation import ugettext, ugettext_lazy as _
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator, validate_email
from django.contrib.auth.models import User,Group
from django.db.models import JSONField
from django.db.models import Q
import time

'''User Profile models'''
class UserProfile(models.Model):
    # links the UserProfile to a User model
    # User model is Django's authentication model: contains username, password, etc.
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    creation_time = models.DateTimeField()
    email = models.EmailField(max_length=360,null=True)

    # TODO: fill other useful fields here as needed
    # current_response = models.OneToOneField('SurveyResponse', default=1)

class UserForm(forms.ModelForm):
    """UserForm is the form for user registration
    """
    password1 = forms.CharField(label=_("Password"), widget=forms.PasswordInput())
    password2 = forms.CharField(label=_("Confirm Password"), widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ('username', 'email',)
    
    def clean_email(self):
        email = self.cleaned_data.get('email')
        # will raise a ValidationError if email is invalid
        validate_email(email)
        return email

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("The two passwords do not match", 'password_mismatch')
        return password2

    def save(self, commit=True):
        user = super(UserForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user

class SurveyResponse(models.Model):
    date = models.DateTimeField(default=timezone.now)
    questions = models.ManyToManyField('Question')
    seed_id = models.IntegerField(null=False, default=-1)
    # user taking this response
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    
    def get_questions(self):
        return self.questions.all()
    
    def num_questions(self):
        return len(self.questions.all())

    def getlastindex(self):
        return len(self.questions.all())-1

class Question(models.Model):
    options = models.ManyToManyField('Option')
    question = models.CharField(max_length=500,default="Assign scores to the options")

    def object_form(self):
        return [o.object_form()
                    for o in self.options.all()]
    
    def get_scores(self):
        return [o.score for o in self.options.all()]
        
    def get_options(self):
        return self.options.all()
    
    # There are definitely better ways of doing this. 
    # For now, we do it manually because of the foreignkey relations
    def copy(self):
        new_copy = Question(question=self.question)
        new_copy.id = None
        new_copy.save()
        for o in self.options.all():
            new_copy.options.add(o.copy())
        new_copy.save()
        return new_copy

# Should contain features in the futures
class Option(models.Model):
    name = models.CharField(max_length=50, null=False, default='')
    text = models.CharField(max_length=50, null=False, default='')
    score = models.IntegerField(null=True)
    
    def object_form(self):
        # if composed of options
        return self.text
    
    def copy(self):
        new_option = Option(name=self.name,text=self.text)
        new_option.save()
        return new_option

'''SurveyResponse models sections end here'''

'''Actual Survey model'''
# Rule model
class SurveySeed(models.Model):
    creation_time = models.DateTimeField(auto_now = True)
    number_of_answers = models.IntegerField(null=True, default=0)
    # question_size = models.IntegerField(null=True,default=2)

    # seed creator
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    survey_title = models.TextField(null=False,default='Default description')
    prompt = models.TextField(null=False,default='Default prompt!')
    # this field is only populated if not generative

    questions = models.ManyToManyField("Question")

    def get_questions(self):
        return list(self.questions.all())
    '''These accessor functions are for the generator to use'''


    def num_questions(self):
        return len(self.questions.all())

    def get_sample(self):
        ss = self.questions.all()[0]
        return [o.text for o in ss.options.all()]

    def get_num_answers(self):
        qset = SurveyResponse.objects.filter(Q(seed_id = self.id))
        return len(qset)
