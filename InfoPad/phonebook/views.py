from django.shortcuts import render

def phonebook(request):
    return render (request, 'phonebook/index.html')
