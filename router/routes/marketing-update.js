"use strict";

var MarketingUpdate = require('../../models/MarketingUpdate'); 
var restify = require('express-restify-mongoose');
var _               = require('lodash');
var helper          = require('../router-helper');

module.exports = function (router) {
    restify.serve(router, 
        MarketingUpdate,
        {
            preMiddleware: helper.isAuthenticated,
            preCreate: function ( req, res, next ) {
                helper.keyCheck(MarketingUpdate, req.body, function (err, record ) {
                    
                    if(err){
                        return res.status(400).send(err);
                    }

                    if( !_.isEmpty(record)) {
                        // record exists, so return the record and do not
                        // proceed with creation
                        return res.status(200).send(record);
                    }
                    // Record does not exist and there are no errors, let us proceed to creation
                    next();
                });
            }
        }
    );
};