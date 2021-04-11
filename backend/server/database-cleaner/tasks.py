# Used for Celery automation
from celery import shared_task
from backend.server.survey.models import *

# QUEUED EVERY WEEK ON A SUNDAY @ 12AM

# look at AWS E3 instance

# look at current users

# check if any user deleted themselves from the platform

# if deleted, then delete user's data from E3 instance

# else, restart task in a week
