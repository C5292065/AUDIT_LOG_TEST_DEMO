/*/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";
var https = require("https");
var express = require("express");
var xsenv = require("@sap/xsenv");
var hdbext = require("@sap/hdbext");
var logging = require("@sap/logging");
var appContext = logging.createAppContext();



// const passport = require('passport');
// const JWTStrategy = require('@sap/xssec').JWTStrategy;
var port  = process.env.PORT || 3000;
var app = express();

// var services = xsenv.getServices({
// 	uaa: "ibms_tester1"
// });

// passport.use(new JWTStrategy(services.uaa));

// app.use(passport.initialize());
// app.use(passport.authenticate('JWT', {
// 	session: false
// }));

var hanaOptions = xsenv.getServices({
	hana: {
		tag: "hana"
	}
});

app.use(logging.expressMiddleware(appContext));

app.use(
	hdbext.middleware(hanaOptions.hana)
);


app.use('/logging',require('./route/logging'));
app.use('/audit-logging',require('./route/audit-logging'));
app.use('/job_log',require('./route/job_log_test'));



// app.get("/vvp", function(req, res) {
// {
// var client = req.db;
// client.prepare(
// //	"select SESSION_CONTEXT('XS_DEVICE'), SESSION_CONTEXT('APPLICATIONUSER'),CURRENT_USER , SESSION_CONTEXT('APPLICATION') from DUMMY",
// 	"select * from \"test1.TEST_BMS_HANA::testtf\"()"/*where IOT_DEVICE_ID = SESSION_CONTEXT('XS_DEVICE')"*/,
// 	function(err, statement) {
// 		if (err) {			
// 		/*	res.type("text/plain").status(500).send("ERROR: " + err.toString());*/res.send("failed 1");	return;	}
// 	statement.exec([],
// 		function(err, results) {
// 			if (err) {			
// 		/*		res.type("text/plain").status(500).send("ERROR: " + err.toString());*/res.send("failed 2");	return;						

// 		} else {	
			
// 		// 	var scope = req.authInfo.xsappname + ".tester1";

	
// 		// res.send(req.authInfo + "0" + scope);
// 		// if (req.authInfo.checkScope(scope)) {
// 			/*res.send(req.authInfo + "1" + scope);*/
// 			// var result = JSON.stringify({ Objects: results});					
// 			// res.type("application/json").status(200).send(result);
// 			res.send(results);
			
// 		// }
// 	// else {
// 	// 	return;
// 	// }
	
		
// 	}});
			
// 		});

// };
// });



// var options = {
// 	anonymous : true, // remove to authenticate calls
// 	auditLog : { logToConsole: true }, // change to auditlog service for productive scenarios
// 	redirectUrl : "/index.xsjs"
// };

// // configure HANA
// try {
// 	options = Object.assign(options, xsenv.getServices({ hana: {tag: "hana"} }));
// 	console.log(options);
// } catch (err) {
// 	console.log("[WARN]", err.message);
// }

// // configure UAA
// try {
// 	options = Object.assign(options, xsenv.getServices({ uaa: {tag: "xsuaa"} }));
// } catch (err) {
// 	console.log("[WARN]", err.message);
// }
//start express
app.listen(port, function () {
  console.log('myapp is using Node.js version: ' + process.version); //new line
  console.log('myapp listening on port ' + port);
});

/*// start server
xsjs(options).listen(port);

console.log("Server listening on port %d", port);*/

/*eslint no-console: 0, no-unused-vars: 0, no-undef:0*/

// "use strict";
// var https = require("https");

// var xsenv = require("@sap/xsenv");
// var port = process.env.PORT || 3000;
// var server = require("http").createServer();

// https.globalAgent.options.ca= xsenv.loadCertificates(); 	

// global.__base = __dirname + "/";
// var init = require(global.__base + "utils/initialize");

// //Initialize Express App for XSA UAA and HDBEXT Middleware
// var app = init.initExpress();



// //Setup Routes


// var router = require("./router")(app, server);


// //Initialize the XSJS Compatibility Layer

// init.initXSJS(app);


// //Start the Server
// server.on("request", app);

// server.listen(port, function() {
// 	console.info("HTTP Server: " + server.address().port);
// });

