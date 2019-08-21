// $.response.contentType = "text/plain";

// $.response.setBody("Hello World");
var logMessage = "tracer testing";
var dest = $.net.http.readDestination("EXTERNAL_HTTP");

var client = new $.net.http.Client();
var req = new $.web.WebRequest($.net.http.GET, "/node?msg="+logMessage);
client.request(req, dest);

var response = client.getResponse();

// console.log("response " + response.status);

// var body = null;
// if (response.body) {
//     body = response.body.asString();
//     console.log(body);
// }

if(response.status === 200)
{console.log ("message is logged on - " + Date.now());}
else
{console.log ("message is not logged on - " + Date.now());}

