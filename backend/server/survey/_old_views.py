'''
This file exists only for reference.
'''


from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse,JsonResponse, HttpRequest, HttpResponseServerError, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib import messages
from django.conf import settings
from .models import *
from django import views
from django.core import mail
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django import forms

# for ML analysis
from .pref_pl.egmm_mixpl import egmm_mixpl as mixpl
from scipy.stats import rankdata
from collections import Counter
import numpy as np

# voting rules. Not ML but used with the ML stuff
from .pref_pl.voting_rules import Borda_winner,maximin_winner,plurality_winner
from .pref_pl.pl_voting import *

# for REST framework
from .serializers import *
from rest_framework import viewsets
from rest_framework import permissions
import json
import csv

# ====================
# View functions start
# ====================

'''
Returns a list of ID for all the 'SurveySeed' the user has taken
'''
def check_taken(user):
    responses = Response.objects.filter(Q(user=user))
    return [s.seed_id for s in responses]

def idx_view_all_questions_trending(request):
    if request.user.id: 
        queryset = SurveySeed.objects.filter(~Q(user=request.user)).exclude(id__in=check_taken(request.user))
    else: queryset = SurveySeed.objects.all()

    context = {'rules':queryset.order_by('-number_of_answers'), 'by':'trending'}
    print(context['by'])
    return render(request, "response/all_questions.html", context)

def idx_view_all_questions_latest(request):
    if request.user.id: 
        queryset = SurveySeed.objects.filter(~Q(user=request.user)).exclude(id__in=check_taken(request.user))
    else: queryset = SurveySeed.objects.all()

    context = {'rules':queryset.order_by('-creation_time'), 'by':'latest'}
    print(context['by'])
    return render(request, "response/all_questions.html", context)

def idx_view_answered_questions_earliest(request):
    queryset = Response.objects.filter(Q(user=request.user))

    context = {'ans':queryset.order_by('date'), 'by': 'earliest'}
    return render(request, "response/answered_questions.html", context)

def idx_view_answered_questions_latest(request):
    queryset = Response.objects.filter(Q(user=request.user))
    context = {'ans':queryset.order_by('-date'), 'by': 'ans-latest'}
    return render(request, "response/answered_questions.html", context)

def idx_view_result_analysis(request):
    context = {}
    return render(request, "response/result_analysis.html", context)

def desicion_questions_view(request):
    context = {}
    return render(request, "response/desicion_questions.html", context)


def rules_view(request):
    context = {}
    return render(request, "response/rules.html", context)
# ====================
# View functions end
# ====================


# ====================
# User functions start
# ====================

def register(request):
    registered = False
    if request.method == "POST":
        form = UserForm(data=request.POST)

        if form.is_valid():
            user = form.save()

            # users are inactive until email verification
            user.is_active = False
            user.save()

            profile = UserProfile(user=user, creation_time=timezone.now())
            profile.save()

            # update registered variable for page to be rerendered
            registered = True

            html_msg = f"<p><a href='{request.build_absolute_uri('/register/confirm/')}{user.id}'>Click here to activate your account</a></p>"
            mail.send_mail("Account Confirmation", "Please confirm your account registration.", settings.EMAIL_HOST_USER, [user.email], html_message=html_msg)
            messages.info(request, "Success, you were sent an email with an account confirmation link!")
        else:
            # fall through to rerendering register html with form.errors filled
            pass
            """
            for error in form.errors:
                print(error)
            """
    else:
        form = UserCreationForm()
        messages.error("Invalid fields!")
    return HttpResponseRedirect('/')
    # return render(request, 'base.html', {'form': form, 'registered': registered})

def confirm_user(request, userid):
    user = get_object_or_404(User, pk=userid)

    # only activate and login if not already activated
    # (prevent link from being reused to allow others to login)
    if not user.is_active:
        user.is_active = True
        user.save()
        login(request, user)

    # TODO: add link expiration page / some error page

    # TODO: create a successful activation page?
    return redirect('/')

def user_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user:
            # TODO: check if user.is_active after setting up email confirmation
            if user.is_active:
                login(request, user)
                request.session['is_login'] = True
                request.session['user_name'] = username
                user_id = User.objects.filter(username = username).values('id').first()
                request.session['user_id'] = user_id['id']
                messages.success(request, "Logged in!")
                # redirect to previous page if sent from @login_required
                # else redirect to index
                if request.GET.get('next', False):
                    # TODO: fix, this redirecting doesn't seem to ever work
                    redirect(request.GET.get('next'))
                else:
                    return redirect('/')   
            else:
                # TODO: figure out how to actually determine if a user has confirmed email, inactive users don't show up in authenticate()
                # resend activation email
                html_msg = f"<p><a href='{request.build_absolute_uri('/register/confirm/')}{user.id}'>Click here to activate your account</a></p>"
                mail.send_mail("Account Confirmation", "Please confirm your account registration.", settings.EMAIL_HOST_USER, [user.email], html_message=html_msg)
                messages.error(request, "Account was not activated. An activation link was resent to your email address!")
                return HttpResponseRedirect('/')
        else:
            messages.error(request, "Invalid login details!")
            return HttpResponseRedirect('/')
    else:
        return HttpResponseRedirect('/')

def user_logout(request):
    # the id is none if not logged in
    if not request.user.id:
        return redirect("/")
    logout(request)
    request.session.flush()
    messages.success(request, "Logged out!")
    return HttpResponseRedirect('/')

# ====================
# User functions end
# ====================

# =============================
# Rule creation functions start
# =============================

# Django endpoint to save rule to database from json post request body
@login_required
def save_rule(request):
    
    if request.method != 'POST':
        return HttpResponse(status=400)
    json_data = json.loads(request.body)

    json_to_seed(json_data['data'], request.user,json_data['title'],json_data['prompt'])
    return redirect('/')

# =============================
# Rule creation functions end
# =============================


# =============================
# Response taking section START
# =============================

def load_response(request,parent_id):
    return redirect('response:takeresponse', parent_id=parent_id, question_num=0, is_review=0)

def get_question(request,parent_id,question_num,is_review):
    # if in review mode is_review == 1

    rule = SurveySeed.objects.get(id=parent_id)
    user = request.user
    
    # try getting it from an existing response first
    try:
        surv = Response.objects.get(Q(seed_id=parent_id,user=user))
        scen = surv.questions.all()[question_num]
    except:
        # this creates a new question object with same values..
        scen = rule.questions.all()[question_num].copy()

    context = {
        'rule':         rule,
        'curr_index':   question_num,
        'question':     scen,
        'is_review':    is_review
    }

    return render(request,'response/takeresponse.html',context)

# review page for users to see their inputs
def review_page(request,rule_id):
    response = Response.objects.get(Q(user=request.user,seed_id=rule_id))
    # only covering case for custom responses
    context = {'response':response}
    return render(request,'response/review_response.html',context)

def submit_response(request):
    # we are unpacking the data send through the js POST here.
    # This would be better handled using forms, but not changing rn.
    data = json.loads(request.body)
    Response.objects.get(Q(seed_id=data['parent_id'],user=request.user))
    return redirect('/')

# Save individual question
def save_question(request,question_id,rule_id,is_review,response_desc,response_title):
    # if in review mode is_review == 1

    if not request.method == "POST": return
    # check if the response exists for this combination already
    try:
        response = Response.objects.get(Q(user=request.user,seed_id=rule_id)) 
    except:
        response = Response(user=request.user,seed_id=rule_id)
        response.save()
        response.prompt = response_title
        response.save()
        response.desc = response_desc
        response.save()
        seed = SurveySeed.objects.get(id=rule_id)
        seed.number_of_answers += 1
        seed.save()

    # copy over the input valeus from request
    vals = list(request.POST.values())[1:]

    question = Question.objects.get(id=question_id)

    for o,sco in zip(question.options.all(),vals):
        o.score = sco
        o.save()
    question.save()
    response.questions.add(question)
    response.save()

    rule = SurveySeed.objects.get(id = rule_id)

    num_questions = len(response.questions.all())

    # if they are at the end of a response
    if num_questions == rule.num_questions() or is_review==1:
        return redirect('response:review',rule_id=rule_id)
    else: 
        return redirect('response:takeresponse',parent_id=rule_id,question_num=num_questions,is_review=0)

# =============================
# Response taking section END
# =============================


# =============================
# Extra endpoints start
# =============================

def rules_explain(request):
    return render(request,'response/rules_explain.html')

def survey_result(request):
    return render(request, 'response/surveyresult.html')

# Django view to handle unknown paths
def unknown_path(request, random):
    return render(request, 'response/unknownpath.html')

# =============================
# Extra endpoints end
# =============================

# =============================
# User created response start
# =============================

@login_required
def my_response(request,user_id):
    if (user_id != request.user.id):
        messages.error(request, "You can't access response data that you do not own!")
        return HttpResponseRedirect('/')
    if request.user.id != user_id:
        messages.error(request, "You can't access someone else's response data!")
        return HttpResponseRedirect('/')
    else:
        #the list of rule sets by the parent_id
        #besides the features and its values in each question, their should also be values
        #including poll create date and number of participants
        user_specific_rules = []
        for x in SurveySeed.objects.filter(user_id = user_id).order_by('-creation_time'):
            user_specific_rules.append(x)

        print(user_specific_rules)

        context = {'rules': user_specific_rules, 'user_id': user_id}
        return render(request, 'response/my_response.html', context)

@login_required
def response_exporter(request,parent_id):
    # Check if user who's trying to download data owns that response
    if (parent_id >= len(SurveySeed.objects.all()) or parent_id <= 0):
        messages.error(request, "You can't download responses that don't exist!")
        return HttpResponseRedirect('/')
    if (SurveySeed.objects.all()[parent_id].user.id != request.user.id):
        messages.error(request, "You can't access someone else's response data!")
        return HttpResponseRedirect('/')
    else:
        # create a response with an attached csv file that gets written, inserting the response information
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="response_{id}.csv"'.format(id=parent_id)
        user_responses = SurveySeed.objects.all()[parent_id]

        writer = csv.writer(response)
        writer.writerow(["ID", "Response Title", "Prompt", "Number of responses", "Average time to complete response", "Data created"])
        writer.writerow([str(user_responses.id), str(user_responses.survey_title), str(user_responses.prompt), str(user_responses.number_of_answers), str(7), str(user_responses.creation_time)])

        return response

@login_required
def response_info(request,parent_id):
    bag = SurveySeed.objects.filter(id=parent_id)
    if not bag:
        messages.error(request, "You can't access responses that don't exist!")
        return HttpResponseRedirect('/')
    if bag[0].user.id != request.user.id:
        messages.error(request, "You can't access someone else's response data!")
        return HttpResponseRedirect('/')
    else:

        seed_rule = bag[0]
        score_per_scen = [[] for _ in seed_rule.questions.all()]

        for s in Response.objects.filter(seed_id=seed_rule.id):
            if s.num_questions() == seed_rule.num_questions():
                for i,scen in enumerate(s.questions.all()):
                    score_per_scen[i].append(scen.get_scores())

        # also store the scores as rankings. high values are preferred
        # returns ranks inside of each vote [9,2,5,0] => [1,3,2,4]
        ranks_per_scen = rankdata(10-np.array(score_per_scen),'ordinal',axis=2)

        # this is where the learned values are stored
        gammas_per_scen = [ (100*mixpl(s,len(s[0]),1)[0][1:]).tolist()
                            for s in score_per_scen
                            ]

        # parsing the rankings to get ranks for each option
        op_rank_per_scen = []
        for s in ranks_per_scen:
            per_scen = []
            for i,_ in enumerate(s[0]):
                votes = Counter(np.array(s)[:,i])
                ranks = [votes[j+1] for j,_ in enumerate(s[0])]
                per_scen.append(ranks)
            op_rank_per_scen.append(per_scen)


        # calculating voting rule winners
        voting_results = [{  
            'borda':(np.argsort(-Borda_winner(votes-1)[1])+1).tolist(),
            'plurality': (np.argsort(-plurality_winner(votes-1)[1])+1).tolist(),
            'maximin':(np.argsort(-maximin_winner(votes-1)[1])+1).tolist()}
                for votes in ranks_per_scen]
        
        pl_voting = [{
            'borda':(PL_Borda(np.array(g))[1]+1).tolist(),
            'plurality':(PL_plurality(np.array(g))[1]+1).tolist(),
            'maximin':(PL_maximin(np.array(g))[1]+1).tolist()}   
                for g in gammas_per_scen]

        context = {
            'rule': seed_rule, 
            'answer_dist': op_rank_per_scen, 
            'pl_gammas':gammas_per_scen,
            'response_voting_results': voting_results,
            'pl_voting_results': pl_voting}
        return render(request, 'response/response_info.html', context)

# =============================
# User created response end
# =============================

# =============================
# REST API functions start
# =============================

class ResponseViewSet(viewsets.ModelViewSet):
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer
    permission_classes = [permissions.AllowAny]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    # [q.object_form() for q in queryset]
    permission_classes = [permissions.AllowAny]


# =============================
# REST API functions end
# =============================


