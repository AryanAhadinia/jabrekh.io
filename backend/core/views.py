from django.http import HttpResponse
from django.shortcuts import render


def ping(request):
    return HttpResponse("pong")
