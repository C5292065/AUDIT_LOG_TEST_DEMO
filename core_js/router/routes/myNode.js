/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, newcap:0*/
"use strict";
var express 		= require("express");
var async			= require("async");
var WebSocketServer = require("ws").Server;

module.exports = function(server) {
	var app = express.Router();

	app.get("/", function(req, res) {
		res.send("Hello World Node.js");
	});


	return app;
};