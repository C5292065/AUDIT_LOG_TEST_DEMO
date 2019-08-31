'use strict';

var xsenv = require('@sap/xsenv');



module.exports = {

	getAccessToken: function(req) {

		var accessToken = null;

		if (req.headers[4].value.split(" ")[0] === "Bearer") {

		  accessToken =  req.headers[4].value.split(" ")[1];

		}

		return accessToken;

		

	}

};