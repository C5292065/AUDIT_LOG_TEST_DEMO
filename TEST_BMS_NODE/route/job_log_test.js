var express = require('express');
var request = require('request');
var router = express.Router();


module.exports = router.get("/", function(req, res) {
 
			// get the full URI of this app
			var thisApp = JSON.parse(process.env.VCAP_APPLICATION);
			var thisAppURI = thisApp.full_application_uris[0];
		
			var final_url = thisAppURI+"/jobs/{6}";
			console.log(final_url);
			request(final_url, { json: true }, function (err, res1, body){
  if (err) { return console.log(err); }
  console.log(body); 
});
res.send(final_url);
res.send("success2");
});

// module.exports = router;