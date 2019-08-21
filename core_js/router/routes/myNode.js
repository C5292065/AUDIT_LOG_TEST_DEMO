/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, newcap:0*/
"use strict";
var express 		= require("express");

module.exports = function() {
	var app = express.Router();

	app.get("/", function(req, res) {
		
		 var logger = req.loggingContext.getLogger('/Application');
  //var tracer = req.loggingContext.getTracer('/Application');
			logger.error(req.query.msg);
			logger.info(req.query.msg);
			// req.loggingContext.getLogger().info(req.query.msg);
			res.send('success');
	});

	return app;
};