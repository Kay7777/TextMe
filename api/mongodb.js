const MongoClient = require('mongodb').MongoClient;
require("dotenv").config();
const uri = process.env.MongodbApiKey;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;
