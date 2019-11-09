# TextMe Backend

## How doea it work?
Users: this app is for the users who have daily route to work or go to school but tired of checking traffic situation everyday.
Funtion: users input the departure, destination, and expected duration of the traffic congestion, the server will check traffic situation and calculate specific duration every morning at 6 am, and the server will use SMS message notificate users when the real time is over the expected time. 

## how to test?
1. git clone
2. npm install
3. apply Nexmo and Google Map API
4. keep all api keys in file .env_example, and change file name to .env
5. change mogodb database and collections name as yours
5. node app.js

## API:
http://textme-backend.herokuapp.com/mongodb

## Frontend Information form:
https://textmeo.herokuapp.com/
1. input province and city to specify the big area
2. input departure and destination to get the route with google map api
3. input the daily time that you start this route
4. input expected duration of the traffic congestion