from django.urls import path
from . import views

urlpatterns = [
    path('Suggestions/',views.suggest),
    path('About/',views.about),
    
]