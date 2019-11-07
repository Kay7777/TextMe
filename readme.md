# TextMe Backend

## how to test?
1. git clone
2. npm install
3. apply Nexmo and Google Map API
4. keep all api keys in file .env_example, and change file name to .env
5. change mogodb database and collections name as yours
5. node app.js

## add user information API:
http://textme-backend.herokuapp.com/mongodb

## function:
1. run automatically at everyday 6 am
2. check every user's route duration 
3. if today's trffic duration is more than user's expection, the server will send SMS to notificate users.