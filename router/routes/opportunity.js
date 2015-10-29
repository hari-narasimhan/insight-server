"use strict";

var Opportunity = require('../../models/Opportunity'); 
var restify = require('express-restify-mongoose');
var helper          = require('../router-helper');

module.exports = function (router) {
    restify.serve(router, Opportunity, {
        preMiddleware: helper.isAuthenticated
    });
};