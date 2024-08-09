from django.db import models

class Application(models.Model):
    name = models.CharField(max_length=100)
    education = models.CharField(max_length=100)
    graduation_year = models.IntegerField()
    skills = models.TextField()
    language = models.CharField(max_length=100)
    gpa = models.FloatField()
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.name