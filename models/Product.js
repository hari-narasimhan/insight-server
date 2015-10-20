"use strict";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var ProductSchema = new mongoose.Schema({
       name: {type:String, unique:true, index: true},
       description: {type:String},
       businessUnitId: { type: Schema.Types.ObjectId, required:true },
       businessUnit: {type:String, required: true}
});

// Add the timestamp plugin
ProductSchema.plugin(timestamp);
ProductSchema.plugin(paginate);

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;