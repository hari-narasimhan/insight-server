"use strict";

var MarketingUpdate = require('../../models/MarketingUpdate'); 
var restify = require('express-restify-mongoose');

module.exports = function (router) {
    restify.serve(router, MarketingUpdate);
};