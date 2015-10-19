"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var SalesUpdateSchema = new mongoose.Schema({
       businessUnitId: { type: Schema.Types.ObjectId, required:true },
       businessUnit: { type:String, required: true },
       month: { type: Number, required:true, min:1, max:12 },
       year: { type: Number, required: true },
       focusAreas: { type: Array },
       activities: { type: Array }      
});

// Add the timestamp plugin
SalesUpdateSchema.plugin(timestamp);
SalesUpdateSchema.plugin(paginate);

var SalesUpdate = mongoose.model('SalesUpdate', SalesUpdateSchema);

module.exports = SalesUpdate;