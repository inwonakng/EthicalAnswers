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


