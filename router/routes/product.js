"use strict";

var Product = require('../../models/Product'); 
var restify = require('express-restify-mongoose');
var helper  = require('../router-helper');

module.exports = function (router) {
    restify.serve(router, Product, {
        preMiddleware: helper.isAuthenticated
    });
};