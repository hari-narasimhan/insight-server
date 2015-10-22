"use strict";

var KeyMetric = require('../../models/KeyMetric'); 
var restify = require('express-restify-mongoose');

module.exports = function (router) {
    restify.serve(router, KeyMetric);
};