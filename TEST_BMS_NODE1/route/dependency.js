// var request = require("request");
const request = require("request-promise-native");
var express = require('express');
var app = express.Router();
module.exports = app.get("/", async(req, res) => {
//var Options = JSON.parse(process.env.destinations);
// res.send(JSON.stringify(process.env));
// var final_url = Options[0].url+"/logging";
// request('https://dewdfgld09256.wdf.sap.corp:51105/log/logging', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); 
//   res.send(error,response,body);// Print the HTML for the Google homepage.
// });
// request.get('https://dewdfgld09256.wdf.sap.corp:51105/log/logging').auth(null, null, true, 'bearerToken');
// res.send('success');
// var global.__base = __dirname + "/";
// var global.__controller = JSON.parse(process.env.destinations)[0].url);
	              let options = {
	                     method: "GET",
	                     json: true,
	                     url: global.__controller + "/logging",                         
	                     auth: {}
	              };
	              options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
	              console.log(req);
	              console.log(options);
	              try  {
	                     let body = await request.get(options);
	                     res.type("application/json").status(200).send(body);
	              } catch(err){
	                     console.log(err.toString());
	                     res.type("text/html").status(500).send(err.toString());
	              } 
	       });
