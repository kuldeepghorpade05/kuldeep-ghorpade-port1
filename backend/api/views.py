from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
import requests
import resend
import os

class ContactView(APIView):
    def post(self, request):
        data = request.data
        name = data.get('name')
        email = data.get('email')
        user_message = data.get('message')

        if not name or not email or not user_message:
             return Response({'success': False, 'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Send Email via Resend API
        print(f"Attempting to send email via Resend to {os.getenv('EMAIL_ADDRESS')}...")
        resend.api_key = os.getenv('RESEND_API_KEY')
        
        try:
            # Construct HTML email
            html_message = f"""
              <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                  <h2 style="color: #007BFF;">New Message Received</h2>
                  <p><strong>Name:</strong> {name}</p>
                  <p><strong>Email:</strong> {email}</p>
                  <p><strong>Message:</strong></p>
                  <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
                    {user_message}
                  </blockquote>
                  <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
                </div>
              </div>
            """
            
            params = {
                "from": "onboarding@resend.dev",
                "to": os.getenv('EMAIL_ADDRESS'),
                "subject": f"New Message From {name}",
                "html": html_message,
                "reply_to": email,
            }

            resend.Emails.send(params)
            print("Email sent successfully via Resend!")
            return Response({'success': True, 'message': 'Message sent successfully!'}, status=status.HTTP_200_OK)

        except Exception as e:
            print(f"Resend Error: {str(e)}")
            return Response({
                'success': False, 
                'message': f'Failed to send message via Resend. Error: {str(e)}'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class GoogleView(APIView):
    def post(self, request):
        token = request.data.get('token')
        secret_key = os.getenv('NEXT_PUBLIC_RECAPTCHA_SECRET_KEY')

        if not token:
             return Response({'success': False, 'error': 'Token is missing'}, status=status.HTTP_400_BAD_REQUEST)

        url = f"https://www.google.com/recaptcha/api/siteverify?secret={secret_key}&response={token}"
        
        try:
            res = requests.post(url)
            data = res.json()
            if data.get('success'):
                return Response({'success': True, 'message': "Captcha verification success!!"}, status=status.HTTP_200_OK)
            else:
                return Response({'success': False, 'error': "Captcha verification failed!"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'success': False, 'error': "Captcha verification failed!"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class DataView(APIView):
    def get(self, request):
        return Response({
            'success': True,
            'message': 'hle!',
            'data': {
                'message': 'Message and email sent successfully!',
            }
        }, status=status.HTTP_200_OK)
