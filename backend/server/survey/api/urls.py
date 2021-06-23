from django.urls import path

from .views import *

urlpatterns = [
    # Survey Seeds access

    # view available surveys. username is the login key.. 
    # I guess the user info will be stored in react side once verification?
    path('surveys/<str:username>',AvailableSurveysList.as_view()),

    # view surveys created by user
    path('mysurvey/<username>',MySurveysList.as_view()),

    # view respnoses by user
    path('responses/<str:username>', MyResponsesList.as_view()),
]
