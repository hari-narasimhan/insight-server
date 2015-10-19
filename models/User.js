"use strict";

var mongoose = require('mongoose');

var User = mongoose.model('User', new mongoose.Schema ({
   email: {type:String, unique:true, index: true, lowercase:true},
   password: {type:String, select: false},
   username: String,
   fullname: String,
   picture: String,
   accessToken: String
}));

module.exports = User;