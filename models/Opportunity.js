"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var OpportunitySchema = new mongoose.Schema({
       businessUnitId: { type: Schema.Types.ObjectId, required:true },
       businessUnit: { type:String, required: true },
       month: { type: Number, required:true, min:0, max:11 },
       year: { type: Number, required: true },
       staff: { type: String, required: true },
       product: { type: String, required: true },
       prospect: { type:String },
       potential: { type:Number },
       status: {type: String},
       statusUpdates: {type: Array},
       targetDate: {type: Date}
       
});

// Add the timestamp plugin
OpportunitySchema.plugin(timestamp);
OpportunitySchema.plugin(paginate);

var Opportunity = mongoose.model('Opportunity', OpportunitySchema);

module.exports = Opportunity;