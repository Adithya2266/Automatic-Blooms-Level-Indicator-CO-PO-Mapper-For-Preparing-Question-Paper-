# Generated by Django 4.2.10 on 2024-11-23 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bloom', '0006_remove_programoutcome_course_outcomes_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='QuizQuestion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.TextField()),
                ('correct_answer', models.CharField(max_length=100)),
                ('options', models.JSONField()),
                ('explanation', models.TextField()),
            ],
        ),
    ]
