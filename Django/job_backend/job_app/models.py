# job_app/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Add custom fields here if needed
    pass

class JobApplication(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    personal_website = models.URLField(blank=True, null=True)
    cv = models.FileField(upload_to='cvs/', blank=True, null=True)  # Optional CV field
    cover_letter = models.TextField()
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
    
    
class Job(models.Model):
    field1 = models.CharField(max_length=100)  # Example field
    field2 = models.CharField(max_length=100)  # Example field
    # Add other fields as necessary
    skills = models.JSONField()  # Store skills as a JSON array
    job_description = models.TextField()  # Store job description

    def __str__(self):
        return self.field1