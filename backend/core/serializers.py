from django.contrib.auth.models import User
from rest_framework import serializers

from .models import (
    Semester,
    Person,
    Instruction,
    TeachingAssisting,
)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name", "email"]


class PersonSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Person
        fields = [
            "user",
            "employee_id",
            "academic_email",
            "github_url",
            "linkedin_url",
            "image",
        ]


class InstructionSerializer(serializers.ModelSerializer):
    person = PersonSerializer()

    class Meta:
        model = Instruction
        fields = ["id", "person", "semester", "description", "person"]


class TeachingAssistingSerializer(serializers.ModelSerializer):
    person = PersonSerializer()

    class Meta:
        model = TeachingAssisting
        fields = ["id", "person", "semester", "description", "person"]


class SemesterSerializer(serializers.ModelSerializer):
    instructors = InstructionSerializer(many=True, read_only=True)
    teaching_assistants = TeachingAssistingSerializer(many=True, read_only=True)

    class Meta:
        model = Semester
        fields = [
            "id",
            "year",
            "semester",
            "title",
            "subtitle",
            "description",
            "syllabus",
            "instructors",
            "teaching_assistants",
        ]
