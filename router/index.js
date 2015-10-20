"use strict";
var express = require('express');
var router = express.Router();
var BusinessUnit = require('../models/BusinessUnit');
var Product = require('../models/Product');
var restify = require('express-restify-mongoose');
var _ = require('lodash');


function _validate( req, res, next) {
    if(_.isEmpty(req.body)) {
        res.status(400).send({message: "Empty payload! sent for create"});
    }
    next();
}


module.exports = function(app) {

    restify.serve(router, BusinessUnit);
    restify.serve(router, Product, {
        preCreate : function (req, res, next) {
            _validate(req, res, next);
        },
        onError : function (err, req, res, next ) {
            res.status(400).end();
            //next(err);
        }
    });
    //app.use('/', require('./routes'));
    //app.use('/auth', require('./routes/auth'));
    //app.use('/api/v1/businessUnits', require('./routes/business-unit'));
    //app.use('/api/v1/products', require('./routes/product'));
    //app.use('/api/v1/engineeringUpdates', require('./routes/engineering-update'));
    //app.use('/api/v1/salesUpdates', require('./routes/sales-update'));
    //app.use('/api/v1/marketingUpdates', require('./routes/marketing-update'));
    
    // app.use('/api/v1/users', require('./routes/v1/users'));

    app.use(router);
};

