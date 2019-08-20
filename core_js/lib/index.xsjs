// $.response.contentType = "text/plain";

// $.response.setBody("Hello World");

 var dest = $.net.http.readDestination("EXTERNAL_HTTP");

var client = new $.net.http.Client();
var req = new $.web.WebRequest($.net.http.GET, "/node");
client.request(req, dest);

var response = client.getResponse();

console.log("response " + response.status);

var body = null;
if (response.body) {
    body = response.body.asString();
    console.log(body);
}
