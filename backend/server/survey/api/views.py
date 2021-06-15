from rest_framework.generics import *
from survey.models import *
from .serializers import *

class SurveySeed_ListView(ListAPIView):
    queryset = SurveySeed.objects.all()
    serializer_class = SurveySeedSerializer

class SurveySeed_DetailView(RetrieveAPIView):
    queryset = SurveySeed.objects.all()
    serializer_class = SurveySeedSerializer

class SurveyResponse_ListView(ListAPIView):
    queryset = SurveyResponse.objects.all()
    serializer_class = SurveyResponseSerializer

class SurveyResponse_DetailView(RetrieveAPIView):
    queryset = SurveyResponse.objects.all()
    serializer_class = SurveyResponseSerializer


