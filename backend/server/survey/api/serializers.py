from rest_framework import serializers
from survey.models import *

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    class Meta:
        model = UserProfile
        fields = ('username','email','creation_time')

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ('name','text','score')

class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=False)
    class Meta:
        model = Question
        fields = ("question", "options")

class SurveySeedSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    questions = QuestionSerializer(many=True, read_only=True)
    class Meta:
        model = SurveySeed
        fields = ("prompt", "survey_title", "user", "number_of_answers", "creation_time","questions")

class SurveyResponseSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    questions = QuestionSerializer(many=True, read_only=False)
    class Meta:
        model = SurveyResponse
        fields = ("date", "questions", "seed_id", "user")

