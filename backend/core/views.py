from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets

from .models import Semester, Person, Instruction, TeachingAssisting
from .serializers import (
    SemesterSerializer,
    PersonSerializer,
    InstructionSerializer,
    TeachingAssistingSerializer,
)


def ping(request):
    return HttpResponse("Pong!\n")


class SemesterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer
