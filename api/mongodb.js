const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kaysong:songqisyxx@picspie-amikx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;