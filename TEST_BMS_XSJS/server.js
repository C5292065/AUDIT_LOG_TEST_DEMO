/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

var xsjs  = require("@sap/xsjs");
var xsenv = require("@sap/xsenv");
var express = require("express");
var https = require("https");
https.globalAgent.options.ca = xsenv.loadCertificates();
var port  = process.env.PORT || 3000;

var options = {
	//anonymous : true, // remove to authenticate calls
	auditLog : { logToConsole: true }, // change to auditlog service for productive scenarios
	redirectUrl : "/index.xsjs",
	context : { environment: process.env,
		__base: __dirname + "/",
		__controller: JSON.parse(process.env.destinations)[0].url
	}
};

// configure UAA
try {
	options = Object.assign(options, xsenv.getServices({ uaa: {tag: "xsuaa"} }));
} catch (err) {
	console.log("[WARN]", err.message);
}

// global.__base = __dirname + "/";
// global.__controller = JSON.parse(process.env.destinations)[0].url;
// start server
xsjs(options).listen(port);

console.log("Server listening on port %d", port);
