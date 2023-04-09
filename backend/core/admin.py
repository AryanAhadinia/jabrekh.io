from django.contrib import admin

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


admin.site.register(Semester)
admin.site.register(Person)
admin.site.register(Instruction)
admin.site.register(TeachingAssisting)
admin.site.register(Enrolling)
admin.site.register(FileMaterial)
admin.site.register(URLMaterial)
admin.site.register(Session)
admin.site.register(Assignment)
