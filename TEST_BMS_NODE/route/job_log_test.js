var express = require('express');
var request = require('request');
var router = express.Router();


module.exports = router.get("/", function(req, res) {
 
			// get the full URI of this app
			var thisApp = JSON.parse(process.env.VCAP_APPLICATION);
			var thisAppURI = thisApp.full_application_uris[0];
		
			var final_url = thisAppURI+"/get";
			
			
			request(final_url, { json: true }, function (err, res1, body){
  if (err) { return console.log(err); }
  console.log(body.url);
  res.send('success');
});

res.send('success');
})

// module.exports = router;