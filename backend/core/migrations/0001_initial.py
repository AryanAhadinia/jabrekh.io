# Generated by Django 4.1.7 on 2023-04-09 09:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
    ]

    operations = [
        migrations.CreateModel(
            name="Person",
            fields=[
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        primary_key=True,
                        serialize=False,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                ("employee_id", models.IntegerField()),
                ("academic_email", models.EmailField(max_length=254)),
                ("github_url", models.URLField(blank=True)),
                ("linkedin_url", models.URLField(blank=True)),
                ("image", models.ImageField(blank=True, upload_to="TAs/images")),
            ],
        ),
        migrations.CreateModel(
            name="Semester",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("year", models.IntegerField()),
                (
                    "semester",
                    models.IntegerField(
                        choices=[(1, "Fall"), (2, "Spring"), (3, "Summer")]
                    ),
                ),
                ("title", models.CharField(max_length=100)),
                ("subtitle", models.TextField()),
                ("description", models.TextField()),
                ("syllabus", models.FileField(blank=True, upload_to="syllabus")),
            ],
            options={
                "ordering": ["-year", "semester"],
                "unique_together": {("year", "semester")},
            },
        ),
        migrations.CreateModel(
            name="TeachingAssisting",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("description", models.TextField()),
                (
                    "person",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="core.person"
                    ),
                ),
                (
                    "semester",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="core.semester"
                    ),
                ),
            ],
            options={
                "unique_together": {("person", "semester")},
            },
        ),
        migrations.CreateModel(
            name="Instruction",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("description", models.TextField()),
                (
                    "person",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="core.person"
                    ),
                ),
                (
                    "semester",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="core.semester"
                    ),
                ),
            ],
            options={
                "unique_together": {("person", "semester")},
            },
        ),
        migrations.CreateModel(
            name="Enrolling",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("description", models.TextField()),
                (
                    "person",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="core.person"
                    ),
                ),
                (
                    "semester",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="core.semester"
                    ),
                ),
            ],
            options={
                "unique_together": {("person", "semester")},
            },
        ),
    ]