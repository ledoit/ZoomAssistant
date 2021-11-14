# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client

# Pull these parameters from the webapp
id = '###'
password = '###'

# Call variables
caller = '+18507792976'
zoom_number = '+16468769923'


# make sure to add environment variables for SID and TOKEN
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

url = 'https://handler.twilio.com/twiml/EHd4aeeecb3b167c1c7cb49b755d9dbb27'

url = url + '?id=' + str(id) + '&password=' + str(password)
d = 'ww' + id + '#wwww*' + password + '#'

call = client.calls.create(
    send_digits=d,

                        twiml="<Response> <Record/> <Say voice='Polly.Amy'> Thanos did nothing "
                              "wrong! </Say> </Response>",
                        to=zoom_number,
                        from_=caller
                    )




print(call.sid)
