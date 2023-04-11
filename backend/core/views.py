from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets

from .models import Semester
from .serializers import SemesterSerializer


def ping(request):
    return HttpResponse("Pong!\n")


class SemesterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer
