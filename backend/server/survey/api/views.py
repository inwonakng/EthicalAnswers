from rest_framework.generics import *
from survey.models import *
from .serializers import *

class AvailableSurveysList(ListAPIView):
    serializer_class = SurveySeedSerializer
    def get_queryset(self):
        return SurveySeed.objects.all().exclude(user__user__username = self.kwargs['username'])

class MySurveysList(ListAPIView):
    serializer_class = SurveySeedSerializer
    def get_queryset(self):
        return SurveySeed.objects.filter(user__user__username = self.kwargs['username'])

class MyResponsesList(ListAPIView):
    serializer_class = SurveyResponseSerializer
    def get_queryset(self):
        return SurveyResponse.objects.filter(user__user__username = self.kwargs['username'])

class SubmitSurvey(ListAPIView):
    pass

class DummyData(ListAPIView):
    
    pass

def parseSurvey(jsonFile):
    surveyDict = json.load(jsonFile)
    creationTime = surveyDict["creation_time"]
    surveyTitle = surveyDict["survey_title"]
    numAnswers = surveyDict["number_of_answers"]
    prompt = ""
    if (surveyDict.has_key("prompt")):
        prompt = surveyDict["prompt"]
    user = User.objects.filter(username__contains = surveyDict["user"]["username"])[0]
    userProfile = UserProfile(user = user, creation_time = surveyDict["user"]["creation_time"], email = surveyDict["user"]["email"])

    surveyObject = SurveySeed(creation_time = creationTime, number_of_answers = numAnswers, user = userProfile,survey_title = surveyTitle)
    surveyObject.save()
    if (surveyDict.has_key("prompt")):
        surveyObject.prompt = prompt
    
    for question in surveyDict["questions"]:
        questionPrompt = question["questions"]
        questionObject = Question(question = questionPrompt)
        questionObject.save()

        for option in question["options"]:
            optionObject = Option(name = option["name"], text = option["text"], score = option["score"])
            optionObject.save()
            questionObject.options.add(optionObject)
        surveyObject.questions.add(questionObject)
    