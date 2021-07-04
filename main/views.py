import django.shortcuts as httpss

from django.http import HttpResponse

import pyrebase

config = {
    'apiKey': "AIzaSyAMay3owmKTcR0Eiwqh5-DklkB8uXKGEeI",
    'authDomain': "basboosa-95469.firebaseapp.com",
    'databaseURL': "https://basboosa-95469.firebaseio.com",
    'projectId': "basboosa-95469",
    'storageBucket': "basboosa-95469.appspot.com",
    'messagingSenderId': "768367310216",
    'appId': "1:768367310216:web:44bb8f61934901f7f8363d",
    'measurementId': "G-85LFS8X6WT"
}
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
def home(request):
    if request.method == 'POST':
        return httpss.render(request,'Comment_Add.html')
    else:
        comments = db.child('Comments').get()
        valuess = comments.each()
        t=[]
        q=[]
        pp=[]
        qq=[]
        for i in valuess:
            t.append(i.val()['Username'])
        for i in valuess:
            q.append(i.val()['Comment_Description'])
      
        x = zip(t,q)
        y=list(x)
        return httpss.render(request,'Home.html',{'Infos':y})
    
    
def add_like(request):
    data={"Status":"0","IP":"192.168.0.1"}
    db.child('Likes').push(data)
    httpss.redirect('/Home/')

def add_comment(request):
    if request.method == 'POST':
        username = request.POST.get('user')
        Comment_Description = request.POST.get('comment_info')
        if username != "" and Comment_Description != "":
            data = {"Username":username,"Comment_Description":Comment_Description}
            db.child("Comments").push(data)
            return httpss.redirect('/Home/')
        else:
            return httpss.render(request,'Comment_Add.html',{'comment_response':'username or Comment_Discription are empty'})

        
    else:
        return httpss.render(request,'Comment_Add.html')



    


"""  email=request.POST.get('email')
    password = request.POST.get('password')
    if request.method == 'POST':
        email=request.POST.get('email')
        password = request.POST.get('password')
        try:
            user = auth.sign_in_with_email_and_password(email,password) 
        except:
            message="invalid info"
            return render(request,'Sign-in.html',{'msg':message})
        return render(request,'Home.html',{'msg1':'Sucessfully login Done'})
    else:
"""     
        
    

    
    
"""
def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            user = auth.create_user_with_email_and_password(email,password)
        except:
            message1="info used before !!"
            return render(request,'Sign-up.html',{'error':message1})
        return render(request,'Sign-in.html',{'upwin':'Successfully Done'})
    else:
        return render(request,'Sign-in.html')
    

    


def logup(request):
    return render(request,'Sign-up.html')


    
def reset(request):
    if request.method == 'POST':
        Email = request.POST.get('email')
        auth.send_password_reset_email(Email)
        return render(request,'Sign-in.html')
    else:
         return render(request,'reset.html')
        
       
"""    



