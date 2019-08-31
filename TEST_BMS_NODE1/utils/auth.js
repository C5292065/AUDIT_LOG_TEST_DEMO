'use strict';

var xsenv = require('@sap/xsenv');



module.exports = {

	getAccessToken: function(req) {

		var accessToken = null;

		if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {

		  accessToken =  req.headers.authorization.split(" ")[1];

		}

		return accessToken;

		

	}

};