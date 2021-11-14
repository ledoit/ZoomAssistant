# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client
from bs4 import BeautifulSoup

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure

# make sure to add environment variables for SID and TOKEN
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

with open('instructions.xml') as f:
    instructions = f.read()

print(instructions)

call = client.calls.create(
                        # url='http://demo.twilio.com/docs/voice.xml',
                        twiml = '<Response><Gather input="speech" timeout="3"></Gather><Say>Ahoy there!</Say></Response>',
                        to='+16174172510', #16177510502
                        from_='+18507792976'
                    )

print(call.sid)
