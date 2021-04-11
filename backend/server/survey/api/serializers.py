from rest_framework import serializers
# from survey.models import Article
from survey.models import *
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'content')

class RuleSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = RuleSet
        fields = ("prompt", "rule_title", "user", "generative", "number_of_answers", "scenario_size", "creation_time")
