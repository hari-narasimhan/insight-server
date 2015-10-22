"use strict";

var SalesUpdate = require('../../models/SalesUpdate'); 
var restify = require('express-restify-mongoose');

module.exports = function (router) {
    restify.serve(router, SalesUpdate);
};