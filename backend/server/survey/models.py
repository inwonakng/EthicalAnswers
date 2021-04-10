import json
from django import forms
from django.utils import timezone
from django.utils.translation import ugettext, ugettext_lazy as _
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator, validate_email
from django.contrib.auth.models import User, Group
from django.db.models import JSONField
from random import sample
from random import randint as rint
from itertools import combinations as comb
from survey.generation import Generator as gen
from django.db.models import Q
import time
from copy import deepcopy

class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title
