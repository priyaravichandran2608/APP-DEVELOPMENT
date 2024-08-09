# job_portal/views.py

from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Job Portal API. Use /api/ to access the endpoints.")
