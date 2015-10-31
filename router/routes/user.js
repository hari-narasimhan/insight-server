"use strict";

var User        = require('../../models/User'); 
var restify     = require('express-restify-mongoose');
var helper  = require('../router-helper');

module.exports = function (router) {
    restify.serve(router, User, {
        preMiddleware: helper.isAuthenticated
    });
};