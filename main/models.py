from django.db import models

class customers(models.Model):
    name = models.CharField(max_length=100)
    password = models.IntegerField()
    is_active = models.BooleanField()

   
