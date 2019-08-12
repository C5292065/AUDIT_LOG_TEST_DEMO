var express = require('express');
var router = express.Router();
// var logging = require("@sap/logging");
// var appContext = logging.createAppContext();

// router.use(logging.expressMiddleware(appContext));

module.exports = router.get("/", function(req, res) {

	
	var logger = req.loggingContext.getLogger('/Application');
  //var tracer = req.loggingContext.getTracer(__filename);
var client = req.db;
client.prepare(
//	"select SESSION_CONTEXT('XS_DEVICE'), SESSION_CONTEXT('APPLICATIONUSER'),CURRENT_USER , SESSION_CONTEXT('APPLICATION') from DUMMY",
	"select * from \"test1.TEST_BMS_HANA::testtf\"()"/*where IOT_DEVICE_ID = SESSION_CONTEXT('XS_DEVICE')"*/,
	function(err, statement) {
		if (err) {			
		/*	res.type("text/plain").status(500).send("ERROR: " + err.toString());*/
		logger.error("wrong artifact");
    	res.send('Forbidden1');return;}
	statement.exec([],
		function(err, results) {
			if (err) {			
		/*		res.type("text/plain").status(500).send("ERROR: " + err.toString());*/						
		logger.error("no data ");
    	res.send('Forbidden');return;
		} else {	
			
		// 	var scope = req.authInfo.xsappname + ".tester1";

	
		// res.send(req.authInfo + "0" + scope);
		// if (req.authInfo.checkScope(scope)) {
			/*res.send(req.authInfo + "1" + scope);*/
			// var result = JSON.stringify({ Objects: results});					
			// res.type("application/json").status(200).send(result);
			logger.error(results);
			res.send(results);
			
		// }
	// else {
	// 	return;
	// }
	
		
	}});
			
		});

}
);

// module.exports = router;