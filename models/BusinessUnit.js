"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var BusinessUnitSchema = new mongoose.Schema({
       name: {type:String, unique:true, index: true},
       description: {type:String},
       keyParameters: {type:Array}
});

// Add the timestamp plugin
BusinessUnitSchema.plugin(timestamp);
BusinessUnitSchema.plugin(paginate);

var BusinessUnit = mongoose.model('BusinessUnit', BusinessUnitSchema);

module.exports = BusinessUnit;