const express = require("express");
const app = express();
const mongodbRoutes = require("./routes/mongoRoute");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/mongodb", mongodbRoutes);


let port = process.env.PORT || 9000
app.listen(port, function() {
    console.log("Backend is ready on "+ port);
});