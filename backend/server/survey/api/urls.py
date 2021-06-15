from django.urls import path

from .views import *

urlpatterns = [
    # Setting the root API to a model list view seems to confuse the django app.
    # i guess leave empty for now

    # Survey Seeds access
    path('surveys',SurveySeed_ListView.as_view()),
    path('surveys/<pk>',SurveySeed_DetailView.as_view()),

    # Survey Responses access
    path('responses', SurveyResponse_ListView.as_view()),
    path('responses/<pk>', SurveyResponse_DetailView.as_view()),
]
