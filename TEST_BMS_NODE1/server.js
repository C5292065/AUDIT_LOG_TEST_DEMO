/*/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";
var express = require("express");
var xsenv = require("@sap/xsenv");
let https = require("https");
https.globalAgent.options.ca = xsenv.loadCertificates();
var port  = process.env.PORT || 3000;
var app = express();

var passport = require('passport');
var JWTStrategy = require('@sap/xssec').JWTStrategy;

var services = xsenv.getServices({
	uaa: {
		tag: "xsuaa"
	}
});

passport.use(new JWTStrategy(services.uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', {
	session: false
}));
global.__base = __dirname + "/";
global.__controller = JSON.parse(process.env.destinations)[0].url;
app.use('/dependency',require('./route/dependency'));


app.listen(port, function () {
  console.log('myapp is using Node.js version: ' + process.version); //new line
  console.log('myapp listening on port ' + port);
});