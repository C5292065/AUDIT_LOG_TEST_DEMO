var request = require("request");
var express = require('express');
var router = express.Router();
module.exports = router.get("/", function(req, res) {
var Options = JSON.parse(process.env.destinations);
var final_url = Options[0].url+"/logging";
request(final_url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
res.send('success');
});