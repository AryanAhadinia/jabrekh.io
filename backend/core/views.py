from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets

from .models import Semester, Person
from .serializers import SemesterSerializer, PersonSerializer


def ping(request):
    return HttpResponse("Pong!\n")


class SemesterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer


class PersonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
