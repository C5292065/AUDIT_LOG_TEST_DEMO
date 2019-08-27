/*/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";
var express = require("express");
var xsenv = require("@sap/xsenv");

var port  = process.env.PORT || 3000;
var app = express();


app.use('/dependency',require('./route/dependency'));


app.listen(port, function () {
  console.log('myapp is using Node.js version: ' + process.version); //new line
  console.log('myapp listening on port ' + port);
});