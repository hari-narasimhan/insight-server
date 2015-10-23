"use strict";

var _ = require('lodash');
var errorMessages   = require('./error-messages');

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