const express = require("express");
const router = express.Router();
const client = require("../api/mongodb");

router.get("/", function(req, res){
    const newData = req.query
    client.connect( err => {
      const collection = client.db("textme").collection("users");
      collection.insertOne(newData);
      client.close();
  });
});

module.exports = router;