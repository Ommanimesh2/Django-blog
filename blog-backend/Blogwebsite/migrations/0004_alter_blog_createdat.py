# Generated by Django 4.0.6 on 2022-08-28 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Blogwebsite', '0003_alter_blog_options_remove_blog_createddate_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='createdAt',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
