from django.urls import path
from . import views

urlpatterns = [
    path('ControlManger/',views.controlmanger,name="ControlManger"),
    
]