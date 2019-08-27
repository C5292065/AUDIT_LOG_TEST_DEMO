/*eslint no-console: 0, no-shadow: 0, new-cap: 0*/
"use strict";

var express = require("express");
var xsenv = require("@sap/xsenv");
var jobsc = require("@sap/jobs-client");

module.exports = function() {
                var app = express.Router();

                // setup connection to job scheduler REST API
                var jobOptions = xsenv.getServices({
                               jobs: {
                                               tag: "jobscheduler"
                               }
                });
                var schedulerOptions = {
                               // name:'myJob',
                               jobId:'106',
                               baseURL: jobOptions.jobs.url,
                               user: jobOptions.jobs.user,
                               password: jobOptions.jobs.password,
                               timeout: 15000
                };
                var scheduler = new jobsc.Scheduler(schedulerOptions);
                
                app.get("/fetch", function(req, res) {
                                               // scheduler.fetchJob(schedulerOptions, function(err, body) {
                                               scheduler.fetchJobSchedules(schedulerOptions, function(err, body) {
                                                               if (err) {
                                                                               res.status(500).json(err); 
                                                               } else {
                                                                               res.status(200).json(body);
                                                               }
                                               });
                });
                return app;
};
