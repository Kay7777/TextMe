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

setInterval( () => {
  client.connect( async err => {
    const collection = await client.db("textme").collection("users");
    const users = await collection.find().toArray();
    await users.forEach( async function(user){
      const timeGap = await getDurationGap(user.origins, user.destinations, user.departure_time);
      if (timeGap >= parseInt(user.expection)) sendSMS(timeGap, user);
    });
    await client.close();
  });
},86400000);

module.exports = router;