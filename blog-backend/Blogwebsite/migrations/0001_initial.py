# Generated by Django 4.0.6 on 2022-08-28 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(blank=True, default='', max_length=100)),
                ('author', models.CharField(blank=True, default='', max_length=100)),
                ('body', models.TextField()),
            ],
            options={
                'ordering': ['createdAt'],
            },
        ),
    ]