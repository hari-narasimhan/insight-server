"use strict";

var Opportunity = require('../../models/Opportunity'); 
var restify = require('express-restify-mongoose');

module.exports = function (router) {
    restify.serve(router, Opportunity);
};