from rest_framework import serializers

from .models import (
    Semester,
    Person,
    Instruction,
    TeachingAssisting,
    Enrolling,
    FileMaterial,
    URLMaterial,
    Session,
    Assignment,
)


class SemesterSerializer(serializers.ModelSerializer):
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
        ]


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = [
            "id",
            "user",
            "employee_id",
            "academic_email",
            "github_url",
            "linkedin_url",
            "image",
        ]
