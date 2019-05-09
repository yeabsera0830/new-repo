https://nameless-coast-36151.herokuapp.com/


Signing Up Using Phone
post request to

https://nameless-coast-36151.herokuapp.com/signup/phone
{
  "phoneNumber": "some number"
  "password": "some password"
}

You will receive
{
  "status": 200(if correct) 400 Wrong
  "token": "some token" if status is 200
  "message" "some Messsage" if status is 400
}

Signing Up Using Facebook
post request to

https://nameless-coast-36151.herokuapp.com/signup/facebook
{
  "facebookToken": "some token"
}

You will receive
{
  "status": 200(if correct) 400 Wrong
  "token": "some token" if status is 200
  "message" "some Messsage" if status is 400
}

Logging In With Phone
https://nameless-coast-36151.herokuapp.com/login/phone
{
  "phoneNumber": "some number"
  "password": "some password"
}

You will receive
{
  "status": 200(if correct) 400 Wrong
  "token": "some token" if status is 200
  "message" "some Messsage" if status is 400
}

Loggin In With Facebook
https://nameless-coast-36151.herokuapp.com/login/facebook
{
  "facebookToken": "some token"
}

You will receive
{
  "status": 200(if correct) 400 Wrong
  "token": "some token" if status is 200
  "message" "some Messsage" if status is 400
}


Sending a Links request
Just send a GET request to
https://nameless-coast-36151.herokuapp.com/links
and you will receive an array of links like this
{
    "loginWithPhone": "https://nameless-coast-36151.herokuapp.com/login/phone",
    "loginWithFacebook": "https://nameless-coast-36151.herokuapp.com/login/facebook",
    "signUpWithPhone": "https://nameless-coast-36151.herokuapp.com/signup/phone",
    "signUpWithFacebook": "https://nameless-coast-36151.herokuapp.com/signup/facebook",
    "getPlaceCount": "https://nameless-coast-36151.herokuapp.com/place/count"
}

Sending Places Request
And since there are only a few places
I did a 2KM radius search
https://nameless-coast-36151.herokuapp.com/place/count
{
  "catagory": "bar"
}

You will receive
{
  "status": 200,
  "count": 5
}