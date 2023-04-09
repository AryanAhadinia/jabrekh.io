from django.contrib import admin

from .models import (
    Semester,
    Person,
    Instruction,
    TeachingAssisting,
    Enrolling,
)


admin.site.register(Semester)
admin.site.register(Person)
admin.site.register(Instruction)
admin.site.register(TeachingAssisting)
admin.site.register(Enrolling)
