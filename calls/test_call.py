# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure

# make sure to add environment variables for SID and TOKEN
account_sid = os.environ['TWILIO_ACCOUNT_SID'] #ACc0a283372393a7747c13bac2cca1d56b
auth_token = os.environ['TWILIO_AUTH_TOKEN'] #760ae03cb12115e66048e4740fdf5850
client = Client(account_sid, auth_token)

call = client.calls.create(
                        url='http://demo.twilio.com/docs/voice.xml',
                        to='+16504894546',
                        from_='+18554208536'
                    )

print(call.sid)