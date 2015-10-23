"use strict";

var BusinessUnit = require('../../models/BusinessUnit'); 
var restify = require('express-restify-mongoose');
var middlewares = require('../../middlewares');

module.exports = function (router) {
    restify.serve(router, BusinessUnit);
};