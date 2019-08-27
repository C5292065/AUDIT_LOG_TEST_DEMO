// $.response.contentType = "text/plain";
// var bundle = $.require("./Pipeline.hdbtextbundle");
// // $.response.setBody("Hello World");
// console.log(bundle.MSG_PIPELINE_GENERATE_EXECUTION_INFO);
var logMessage = "logging testing for TRP project";
var dest = $.net.http.readDestination("EXTERNAL_HTTP1");

var client = new $.net.http.Client();
var req = new $.web.WebRequest($.net.http.GET, "/logging");
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

