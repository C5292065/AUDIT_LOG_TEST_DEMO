var express = require('express');
var router = express.Router();
var auditlogging = require("@sap/audit-logging");
var xsenv = require("@sap/xsenv");

var credentials = xsenv.getServices({
	auditlog: {
		tag: "auditlog"
	}
}).auditlog;

module.exports = 
// function (){
// auditlogging.v2(credentials,function(err,auditlog){
// 	if(err){
// 		return console.log(err);
// 	}
// 	else{
router.get("/", function(req, res) {
auditlogging.v2(credentials,function(err,auditlog){
	if(err){
		return console.log(err);
	}
	else{


var client = req.db;
client.prepare(
	"select * from \"test1.TEST_BMS_HANA::testtf\"()",
	function(err, statement) {
		if (err) {			
		
    	res.send('Forbidden1');return;}
	statement.exec([],
		function(err, results) {
			if (err) {			
		
    	res.send('Forbidden');return;
		} else {
			auditlog.securityMessage('successful by jinal').by('jinal').log(function(err1){
				if(err1){
					res.send("failed");return;
				}
			res.send(results);	
			});
				
	}});	
		});

	}});
	});
// }});};
