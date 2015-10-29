"use strict";

var KeyMetric   = require('../../models/KeyMetric'); 
var restify     = require('express-restify-mongoose');
var helper      = require('../router-helper');

module.exports = function (router) {
    restify.serve(router, KeyMetric, {
        preMiddleware: helper.isAuthenticated
    });
};