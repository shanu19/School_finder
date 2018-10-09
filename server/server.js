var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 5000;

//controllers
var schoolController = require("./controllers/schoolController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

app.listen(port,() => {
  console.log('we are live on ' + port)
})
// Connect to mongodb database
mongoose.connect("mongodb://admin:root0@ds119268.mlab.com:19268/notable")
