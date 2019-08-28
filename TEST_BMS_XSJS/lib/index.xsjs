// var logMessage = "logging testing for TRP project";
// var dest = $.net.http.readDestination("EXTERNAL_HTTP1");

// var client = new $.net.http.Client();
// var req = new $.web.WebRequest($.net.http.GET, "/logging");
// client.request(req, dest);

// var response = client.getResponse();

// if(response.status === 200)
// {console.log ("message is logged on - " + Date.now());}
// else
// {console.log ("message is not logged on - " + Date.now());}

var request = $.require('request');
var Options = JSON.parse(environment.destinations);
var final_url = Options[0].url+"/logging";
try {
  var response = request.sync(final_url);
  $.response.setBody(response.body);
  $.trace.info('success');
} catch(error) {
  $.trace.error(error.message);
}








