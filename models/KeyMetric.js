"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var KeyMetricSchema = new mongoose.Schema({
       businessUnitId: { type: Schema.Types.ObjectId, required:true },
       businessUnit: { type:String, required: true },
       month: { type: Number, required:true, min:1, max:12 },
       year: { type: Number, required: true },
       kpp: {type: String, required: true},
       value: {type: String, required; true}
       
});

// Add the timestamp plugin
KeyMetricSchema.plugin(timestamp);
KeyMetricSchema.plugin(paginate);

var KeyMetric = mongoose.model('KeyMetric', KeyMetricSchema);

module.exports = KeyMetric;