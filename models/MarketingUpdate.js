"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var MarketingUpdateSchema = new mongoose.Schema({
       businessUnitId: { type: Schema.Types.ObjectId, required:true },
       businessUnit: { type:String, required: true },
       month: { type: Number, required:true, min:0, max:11 },
       year: { type: Number, required: true },
       focusAreas: { type: Array },
       activities: { type: Array }      
});

// Add the timestamp plugin
MarketingUpdateSchema.plugin(timestamp);
MarketingUpdateSchema.plugin(paginate);

var MarketingUpdate = mongoose.model('MarketingUpdate', MarketingUpdateSchema);

module.exports = MarketingUpdate;