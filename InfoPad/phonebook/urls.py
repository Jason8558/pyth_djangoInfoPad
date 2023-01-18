from django.urls import path
from . import views

urlpatterns = [
    path('', views.phonebook, name='index'),

     ]
