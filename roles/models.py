from django.db import models

class Role(models.Model):
    role = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    skills = models.TextField()
    experience = models.CharField(max_length=100)
    salary = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.role