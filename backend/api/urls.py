from django.urls import path
from .views import ContactView, GoogleView, DataView

urlpatterns = [
    path('contact/', ContactView.as_view(), name='contact'),
    path('google/', GoogleView.as_view(), name='google'),
    path('data/', DataView.as_view(), name='data'),
]
