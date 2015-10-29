"use strict";
var _               = require('lodash');
var errorMessages   = require('./error-messages');
var jwt             = require('jwt-simple');
var config          = require('../config');
var moment          = require('moment');
var User            = require('../models/User');

/**
* A helper method to check if a record for the model 
* with business unit, year and month combination
*/
exports.keyCheck = function ( model, data, callback) {
    
    if(_.isEmpty(data)) {
        return res.status(400).send(errorMessages.EMPTY_BODY);
    }

    var year            = parseInt(data.year);
    var month           = parseInt(data.month);
    var businessUnitId  = data.businessUnitId;
    var query           = {businessUnitId: businessUnitId, year:year, month:month}

    // Fetch the record for the keys and pass the information back
    model.findOne(query, function(err, record){
        callback(err, record);
    });
};

/**
* Checks if the request is an authentiated request by
* investigating the jwt token
*/
exports.isAuthenticated = function ( req, res, next ) {

    if(!(req.headers && req.headers.authorization)) {
        return res.status(401).send(errorMessages.NOT_AUTHENTICATED);
    }

    try {
        var header  = req.headers.authorization.split(' ');
        var token   = header[1];
        var payload = jwt.decode(token, config.SECRET_TOKEN);
        var now     = moment().unix();
    } catch (e) {
        return res.status(400).send(errorMessages.INVALID_TOKEN);   
    }
    

    if (now > payload.exp) {
        return res.status(401).send(errorMessages.TOKEN_EXPIRED);   
    }

    User.findById(payload.sub, function (err, user) {

        if(!user) {
            return res.status(400).send(errorMessages.USER_NOT_FOUND);
        }

        req.user = user;
        next();
    });
};