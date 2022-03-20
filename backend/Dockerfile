# backend application
FROM python:3.10-slim-buster

WORKDIR /app/backend

RUN apt-get update
RUN apt-get -y install libpq-dev gcc python3-dev

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN pip3 install --upgrade pip

# Install dependencies:
COPY server .
RUN pip3 install -r requirements.txt

# do the heroku stuff
RUN python3 manage.py collectstatic

# handle migrations
RUN python3 manage.py makemigrations && python3 manage.py migrate

# Run the application:
CMD "${VIRTUAL_ENV}/bin/gunicorn" backend.wsgi:application --bind "0.0.0.0:8011" 
