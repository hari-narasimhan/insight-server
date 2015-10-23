"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var InitiativeSchema = new mongoose.Schema({
       businessUnitId: { type: Schema.Types.ObjectId, required:true },
       businessUnit: { type:String, required: true },
       month: { type: Number, required:true, min:0, max:11 },
       year: { type: Number, required: true },
       initiatives: { type: Array }      
});

// Add the timestamp plugin
InitiativeSchema.plugin(timestamp);
InitiativeSchema.plugin(paginate);

var Initiative = mongoose.model('Initiative', InitiativeSchema);

module.exports = Initiative;