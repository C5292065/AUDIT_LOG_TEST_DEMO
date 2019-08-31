var request = $.require("request");

var options = {
	                     method: "GET",
	                     json: true,
	                     url: __controller + "/logging",                         
	                     auth: {}
	              };
	              //console.log($.request);
	              options.auth.bearer = $.require(__base + "utils/auth").getAccessToken($.request);
	              //console.log(options);
	              try  {
	                     var response = request.sync(options);
	                     $.response.setBody(response.body);
	              } catch(err){
	                     console.log(err.toString());
	              } 
// var request = $.require('request');
// var Options = JSON.parse(environment.destinations);
// var final_url = Options[0].url+"/log/logging";
// try {
//   var response = request.sync(final_url);
//   if($.response.status === 200)
// {console.log ("message is logged on - " + Date.now());}
// else
// {console.log ("message is not logged on - " + Date.now());}
//   //$.response.setBody(response.body);
// } catch(error) {
//   $.trace.error(error.message);
// }









