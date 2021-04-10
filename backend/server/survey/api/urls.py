from django.urls import path

from .views import ArticleListView, ArticleDetailView

urlpatterns = [
    # root api
    path('', ArticleListView.as_view()),

    # based off primary key
    path('<pk>', ArticleDetailView.as_view()),

    # api/survey/id <-- grab information about a specific survey id
    path('survey/<pk>', ArticleListView.as_view()),

    # api/user/id <-- grab information about a user
    path('survey/<pk>', ArticleListView.as_view()),
]
