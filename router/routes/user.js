"use strict";

var User        = require('../../models/User'); 
var restify     = require('express-restify-mongoose');

module.exports = function (router) {
    restify.serve(router, User);
};