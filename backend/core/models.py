import os

from django.db import models
from django.contrib.auth.models import User


class Semester(models.Model):
    SEMESTERS = (
        (1, "Fall"),
        (2, "Spring"),
        (3, "Summer"),
    )

    year = models.IntegerField()
    semester = models.IntegerField(choices=SEMESTERS)
    title = models.CharField(max_length=100)
    subtitle = models.TextField()
    description = models.TextField()
    syllabus = models.FileField(upload_to="syllabus", blank=True)

    class Meta:
        unique_together = ("year", "semester")
        ordering = ["-year", "semester"]

    def __str__(self):
        return self.get_semester_display() + " " + str(self.year)


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    employee_id = models.IntegerField(unique=True)
    academic_email = models.EmailField()
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    image = models.ImageField(upload_to="TAs/images", blank=True)

    def __str__(self):
        return (
            self.user.first_name + " " + self.user.last_name
            if self.user.first_name and self.user.last_name
            else self.user.username
        )


class Instruction(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    description = models.TextField()

    class Meta:
        unique_together = ("person", "semester")

    def __str__(self):
        return f"{str(self.person)} @ {str(self.semester)}"


class TeachingAssisting(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    description = models.TextField()

    class Meta:
        unique_together = ("person", "semester")

    def __str__(self):
        return f"{str(self.person)} @ {str(self.semester)}"


class Enrolling(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    description = models.TextField()

    class Meta:
        unique_together = ("person", "semester")

    def __str__(self):
        return f"{str(self.person)} @ {str(self.semester)}"
