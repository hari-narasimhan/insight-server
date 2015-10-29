"use strict";

var BusinessUnit    = require('../../models/BusinessUnit'); 
var restify         = require('express-restify-mongoose');
var helper          = require('../router-helper');

module.exports = function (router) {
    restify.serve(router, BusinessUnit, {
        preMiddleware: helper.isAuthenticated
    });
};