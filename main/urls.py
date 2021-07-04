from django.urls import path
from . import views

<<<<<<< HEAD
#app_name = "main"
urlpatterns = [
    path('',views.home),
    path('Drop_like',views.Add_Like),
=======
app_name = "main"
urlpatterns = [
    path('',views.home),
    #path('Drop_like',views.add_like,name='Drop_Like'),
>>>>>>> 01c47cde0314c7a9f0fe999d935dc2c44d4804af
    path('Add_Comment/',views.add_comment),
    
   # path('sign-in/',views.login),
   # path('sign-up/',views.logup),
   # path('sign-in/reset_password/',views.reset,name='Forget_Password'),
]
# hi