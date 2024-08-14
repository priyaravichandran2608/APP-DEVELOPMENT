from django.urls import path
from .views import login_view, signup_view
from .views import submit_application
from .views import post_job

urlpatterns = [
    path('api/login/', login_view, name='login'),
    path('api/signup/', signup_view, name='signup'),
    path('submit/', submit_application, name='submit-application'),
    path('postjob/', post_job, name='post_job'),
]
