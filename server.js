var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mogoose');
var port = process.env.PORT || 8080;


app.listen(port);
console.log('Magic happening at port' + port);