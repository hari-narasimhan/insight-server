"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var EngineeringUpdateSchema = new mongoose.Schema({
       businessUnitId: { type: Schema.Types.ObjectId, required:true },
       businessUnit: { type:String, required: true },
       month: { type: Number, required:true, min:0, max:11 },
       year: { type: Number, required: true },
       focusAreas: { type: Array },
       activities: { type: Array },
       releases: { type:Array },
       completionReports: { type:Array }
       
});

// Add the timestamp plugin
EngineeringUpdateSchema.plugin(timestamp);
EngineeringUpdateSchema.plugin(paginate);

var EngineeringUpdate = mongoose.model('EngineeringUpdate', EngineeringUpdateSchema);

module.exports = EngineeringUpdate;