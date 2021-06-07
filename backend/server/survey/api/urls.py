from django.urls import path

from .views import *

urlpatterns = [
    # root api
    path('', ArticleListView.as_view()),

    # based off primary key
    path('<pk>', ArticleDetailView.as_view()),

    # view all surveys
    path('all_surveys', SurveySeedView.as_view()),

    # view all surveys that the authenticated user owns
    path('my_survey', ArticleDetailView.as_view()),

    # view information about the passed in survey id that the authenticated user owns
    path('my_survey/<pk>/info', ArticleDetailView.as_view()),

]
