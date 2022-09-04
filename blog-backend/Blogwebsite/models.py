from django.db import models

class Blog(models.Model):
    createdAt = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    author = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField()
    

    class Meta:
        ordering = ['createdAt']