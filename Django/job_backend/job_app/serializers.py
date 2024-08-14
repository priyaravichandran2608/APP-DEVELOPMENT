# job_app/serializers.py

from rest_framework import serializers
from .models import Job, JobApplication
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login

User = get_user_model()

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'  # Ensure this matches your model fields

class JobApplicationSerializer(serializers.ModelSerializer):
    cv = serializers.FileField(required=False)  # Make the CV field optional

    class Meta:
        model = JobApplication
        fields = '__all__'

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data.get('username'), password=data.get('password'))
        if user is None:
            raise serializers.ValidationError('Invalid credentials')
        return data

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
