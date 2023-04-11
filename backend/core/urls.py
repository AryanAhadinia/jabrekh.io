from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from .views import ping, SemesterViewSet, PersonViewSet, Instruction, TeachingAssisting


router = DefaultRouter()
router.register(r"semester", SemesterViewSet, basename="semester")
router.register(r"person", PersonViewSet, basename="person")
router.register(r"instruction", Instruction, basename="instruction")
router.register(r"teaching_assisting", TeachingAssisting, basename="teaching_assisting")

urlpatterns = [
    path('', include(router.urls)),
    path("ping", ping),
]
