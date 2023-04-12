# Generated by Django 4.1.7 on 2023-04-10 09:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0008_alter_assignment_solutions"),
    ]

    operations = [
        migrations.AlterField(
            model_name="assignment",
            name="questions",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.RESTRICT,
                related_name="questions",
                to="core.filematerial",
            ),
        ),
        migrations.AlterField(
            model_name="assignment",
            name="solutions",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.RESTRICT,
                related_name="solutions",
                to="core.filematerial",
            ),
        ),
    ]