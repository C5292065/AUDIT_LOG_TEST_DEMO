/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

var xsjs  = require("@sap/xsjs");
var xsenv = require("@sap/xsenv");
var express = require("express");

var port  = process.env.PORT || 3000;

var options = {
	anonymous : true, // remove to authenticate calls
	auditLog : { logToConsole: true }, // change to auditlog service for productive scenarios
	redirectUrl : "/index.xsjs",
	context : { environment: process.env}
};

console.log(process.env.destinations);
// start server
xsjs(options).listen(port);

console.log("Server listening on port %d", port);
