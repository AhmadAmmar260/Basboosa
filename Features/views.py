from django.shortcuts import render


def suggest(request):
    return render(request,'Suggetions.html')

def about(request):
    return render(request,'About.html')


