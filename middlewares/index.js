"use strict";
var _ = require('lodash');

// A companion post read middleware for express-restify-mongoose framework
exports.postRead = function ( req, res, next ) {
    var result = req.erm.result;
    // transform the result into data and cursor format
    if(_.isArray(result)) {
    }
    next();
};
