from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from .views import ping, SemesterViewSet, PersonViewSet


router = DefaultRouter()
router.register(r"semester", SemesterViewSet, basename="semester")
router.register(r"person", PersonViewSet, basename="person")

urlpatterns = [
    path('', include(router.urls)),
    path("ping", ping),
]
