# Generated by Django 4.1.7 on 2023-04-09 12:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0004_alter_enrolling_options_alter_instruction_options"),
    ]

    operations = [
        migrations.AlterField(
            model_name="teachingassisting",
            name="description",
            field=models.TextField(blank=True),
        ),
    ]