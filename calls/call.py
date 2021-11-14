# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse, Say

# Pull these parameters from the webapp
id = '93252622257'
password = '703216'

# Call variables
caller = '+18507792976'
# zoom_number = '+16468769923'


# make sure to add environment variables for SID and TOKEN
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

url = 'https://handler.twilio.com/twiml/EHd4aeeecb3b167c1c7cb49b755d9dbb27'


d = 'ww' + id + '#wwww*' + password + '#'

call = client.calls.create(
                        send_digits=d,
                        url=url,
                        to='+16468769923',
                        from_=caller,
                    )



print(call.sid)
print(call.)