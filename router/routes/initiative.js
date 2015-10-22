"use strict";

var Initiative = require('../../models/Initiative'); 
var restify = require('express-restify-mongoose');

module.exports = function (router) {
    restify.serve(router, Initiative);
};