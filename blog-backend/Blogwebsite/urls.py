
from django.contrib import admin
from django.urls import path
from Blogwebsite import views

urlpatterns = [
    # path('',include('Blogwebsite.urls'))
    path('blogs/',views.Blog_list),
    path('blogs/<int:pk>/',views.Blog_detail)

]
