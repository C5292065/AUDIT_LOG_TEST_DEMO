var express = require('express');
var router = express.Router();

module.exports = router.get("/", function(req, res) {

	
	var logger = req.loggingContext.getLogger('/Application');
  //var tracer = req.loggingContext.getTracer(__filename);
var client = req.db;
client.prepare(
	"select * from \"test1.TEST_BMS_HANA::testtf\"()",
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

			logger.error(results);
			res.send(results);

	}});
			
		});

}
);

