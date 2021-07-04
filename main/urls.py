from django.urls import path
from . import views

#app_name = "main"
urlpatterns = [
    path('',views.home),
    path('Drop_like',views.Add_Like),
    path('Add_Comment/',views.add_comment),
    
   # path('sign-in/',views.login),
   # path('sign-up/',views.logup),
   # path('sign-in/reset_password/',views.reset,name='Forget_Password'),
]
# hi