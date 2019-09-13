"use strict";
// var translatedToken = "translation";
// $.response.contentType = "text/plain";

// $.response.setBody(translatedToken);

// var i18n_en = $.import('translations_poc_mta/xsjs/i18n.xsjslib');
var TextBundle = $.require('@sap/textbundle').TextBundle;

// var bundle = new TextBundle({path: 'i18n', locale: 'en_US'});
var sKey = $.request.parameters.get("key");			// obtain the key parameter from the request
var language = $.session.language; 


	console.log("Language is ",language);
	var bundle = new TextBundle({path: '../lang/i18n', locale: language});
	var translatedToken = bundle.getText(sKey);
	$.response.contentType = "text/plain";
	$.response.setBody(translatedToken);
	$.response.status = $.net.http.OK;
