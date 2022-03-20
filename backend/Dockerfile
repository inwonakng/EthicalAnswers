# backend application
FROM python:3.10-slim-buster

WORKDIR /app/backend


ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN pip3 install --upgrade pip

# Install dependencies:
COPY server/requirements.txt .
RUN pip3 install -r requirements.txt

# Run the application:
COPY server .
CMD "${VIRTUAL_ENV}/bin/gunicorn" backend.wsgi:application --bind "0.0.0.0:8011" 
