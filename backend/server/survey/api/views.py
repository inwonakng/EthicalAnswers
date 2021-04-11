from rest_framework.generics import *
from survey.models import *
from .serializers import *

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class RuleSetView(ListAPIView):
    queryset = RuleSet.objects.all()
    serializer_class = RuleSetSerializer
