const express = require("express");
const router = express.Router();
const client = require("../api/mongodb");
const getDurationGap = require("../api/google");
const sendSMS = require("../api/nexmo");

router.get("/", function(req, res){
    const newData = req.query
    client.connect( err => {
      const collection = client.db("textme").collection("users");
      collection.insertOne(newData);
      client.close();
  });
});

// start at 6am and will check database and decide to send SMS or not everyday 6am
setInterval( () => {
  client.connect( async err => {
    const collection = await client.db("textme").collection("users");
    const users = await collection.find().toArray();
    await users.forEach( async function(user){
      const timeGap = await getDurationGap(user.origins, user.destinations, user.departure_time);
      console.log(timeGap)
      if (timeGap >= parseInt(user.expection)) sendSMS(timeGap, user);
    });
    await client.close();
  });
},86400000);

module.exports = router;