# Generated by Django 4.0.6 on 2022-08-28 06:50

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Blogwebsite', '0006_alter_blog_options_remove_blog_createdat'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blog',
            options={'ordering': ['createdAt']},
        ),
        migrations.AddField(
            model_name='blog',
            name='createdAt',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
