/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TEST_IBMS_UI5/TEST_IBMS_UI5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});