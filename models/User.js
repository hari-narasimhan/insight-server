"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamp = require('mongoose-timestamp'),
    paginate = require('mongoose-paginate');

var UserSchema = new mongoose.Schema ({
   email: {type:String, unique:true, index: true, lowercase:true},
   password: {type:String, select: false},
   username: String,
   fullname: String,
   picture: String,
   accessToken: String
});

// Add the timestamp plugin
UserSchema.plugin(timestamp);
UserSchema.plugin(paginate);

var User = mongoose.model('User', UserSchema);

module.exports = User;