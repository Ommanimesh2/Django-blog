from turtle import title
from rest_framework import serializers
from Blogwebsite.models import Blog

class BlogSerializer(serializers.Serializer):
    # createdAt= serializers.DateTimeField()
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True, allow_blank=True, max_length=100)
    author = serializers.CharField(required=True, allow_blank=True, max_length=100)
    body = serializers.CharField()



    def create(self, validated_data):

        return Blog.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # instance.createdAt = validated_data.get('createdAt', instance.createdAt)
        instance.author = validated_data.get('author', instance.author)
        instance.title = validated_data.get('title', instance.title)
        instance.body = validated_data.get('body', instance.body)

        instance.save()
        return instance