"use strict";

var EngineeringUpdate = require('../../models/EngineeringUpdate'); 
var restify = require('express-restify-mongoose');

module.exports = function (router) {
    restify.serve(router, EngineeringUpdate);
};