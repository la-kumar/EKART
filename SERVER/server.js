var express = require('express');
var app = express();
var routes = require('./routes');

app.listen(2000);
console.log("listening");

app.use('/',routes) ;


