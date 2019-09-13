var translatedToken = "translation";
$.response.contentType = "text/plain";

$.response.setBody("POC_FOR_TRANSLATION");

// var TextBundle = $.require('@sap/textbundle').TextBundle;

// var bundle = new TextBundle({path: 'i18n', locale: 'en_US'});
// var sKey = $.request.parameters.get("key");			// obtain the key parameter from the request
// var language = $.session.language; 
// console.log("Hello there");

// switch(language){
// 	case "en-US":
// 		var bundle = new TextBundle({path: 'i18n', locale: 'en_US'});
// 		var translatedToken = bundle.getText(sKey);
// 		$.response.contentType = "text/plain";
// 		$.response.setBody(translatedToken);
// 		console.log("Hello");
// 		$.response.status = $.net.http.OK;
// 		break;
// }
