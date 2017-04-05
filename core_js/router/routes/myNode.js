/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, newcap:0*/
"use strict";
var express 		= require("express");
var async			= require("async");
var yahooFinance	= require("yahoo-finance");
var googleTrends	= require("google-trends-api");
var WebSocketServer = require("ws").Server;

module.exports = function(server) {
	var app = express.Router();

	app.get("/", function(req, res) {
		res.send("Hello World Node.js");
	});
	
	app.get("/example1", function(req, res) {
		var client = req.db;
		client.prepare("select SESSION_USER from \"DUMMY\" ",
			function(err, statement) {
				if (err) {
					res.type("text/plain").status(500).send("ERROR: " + err.toString());
					return;
				}
				statement.exec([],
					function(err, results) {
						if (err) {
							res.type("text/plain").status(500).send("ERROR: " + err.toString());
							return;
						} else {
							var result = JSON.stringify({
								Objects: results
							});
							res.type("application/json").status(200).send(result);
						}
					}
				);
			}
		);
	});

	app.get("/example2", function(req, res) {
		var client = req.db;
		
		async.waterfall([
			function prepare(callback) {
				client.prepare("select SESSION_USER from \"DUMMY\" ",
					function(err, statement) {
						callback(null, err, statement);
					});
			},
			function execute(err, statement, callback) {
				statement.exec([],
					function(execErr, results) {
						callback(null, execErr, results);
					});
			},
			function response(err, results, callback) {
				if (err) {
					res.type("text/plain").status(500).send("ERROR: " + err.toString());
					return;
				} else {
					var result = JSON.stringify({ Objects: results });
					res.type("application/json").status(200).send(result);
				}
				callback();
			}
		]);
	});
	
	
	app.get("/yahoo_stocks_save", function(req, res) {
		var client = req.db;
		
		async.waterfall([
			
			function getStockData(callback){
				yahooFinance.historical({
						symbol: "AAPL",
						from: "2017-01-01",
						to: "2017-01-30"
					}, function (err, quotes) {
						
						var results = [];
						
						for(var x in quotes){
						  results.push(JSON.stringify([JSON.parse(JSON.stringify(quotes[x]))]));
						}
						
						callback(null, err, results);
					}
				);
			},
			
			function prepare(error, results, callback) {
				client.prepare("INSERT INTO \"YahooFinance.Stocks\" VALUES(?,?,?,?,?,?,?,?)",
					function(err, statement) {
						callback(null, results, err, statement);
					});
			},
			
			function execute(results, err, statement, callback) {
				statement.exec(results,
					function(execErr, rows) {
						callback(null, execErr, rows);
					});
			},
			
			function response(err, rows, callback) {
				if (err) {
					res.type("text/plain").status(500).send("ERROR: " + err.toString());
					return;
				} else {
					var result = JSON.stringify({ Objects: rows });
					res.type("application/json").status(200).send(rows);
				}
				callback();
			}
		]);
	});
	
	
	app.get("/yahoo_stocks_live/:symbol/:from/:to", function(req, res) {
		
		yahooFinance.historical({
			symbol: req.params.symbol,
			from: req.params.from,
			to: req.params.to
			}, function (err, quotes) {
				if (err) {
						res.type("text/plain").status(500).send("ERROR: " + err.toString());
						return;
					} else {
						res.type("application/json").status(200).send(quotes);
				}
		});
	});
	
	app.get("/google_queries_live/:query", function(req, res) {
		
		googleTrends.relatedQueries({
			keyword: req.params.query
			}, function (err, results) {
				if (err) {
						res.type("text/plain").status(500).send("ERROR: " + err.toString());
						return;
					} else {
						res.type("application/json").status(200).send(results);
				}
		});
	});


	return app;
};