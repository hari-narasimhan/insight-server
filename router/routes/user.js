"use strict";

var User = require('../../models/User'); 
var restify = require('express-restify-mongoose');
var middlewares = require('../../middlewares');

module.exports = function (router) {
    restify.serve(router, User, {postRead: middlewares.postRead});
};