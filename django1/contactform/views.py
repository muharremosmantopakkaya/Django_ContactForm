
from django.shortcuts import render
from django.http import JsonResponse
from .models import ContactMessage

def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        contact_message = ContactMessage.objects.create(name=name, email=email, message=message)
        return JsonResponse({'message': 'İletişim mesajınız başarıyla gönderildi!'})
    return render(request, 'contact.html')
