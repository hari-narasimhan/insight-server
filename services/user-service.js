"use strict";

var bcrypt  = require('bcryptjs');
var User    = require('../models/User');
var config  = require('../config');
var jwt     = require('jwt-simple');
var moment  = require('moment');

function createToken (user) {
    var payload = {
        exp: moment().add(14, 'days').unix(),
        iat: moment().unix(),
        sub: user._id
    }

    return jwt.encode(payload, config.SECRET_TOKEN);
}

exports.login = function ( email, password, callback ) {

        User.findOne({email:email}, '+password', function (err, user) {
            
            if(!user) {
                return callback ( {message: "Unable to retrieve user!", code: "INS0001"}, undefined );
            }

            bcrypt.compare(password, user.password, function ( err, isMatch ) {
                
                if ( !isMatch ) {
                    return callback ( {message: "Email or password is invalid", code: "INS0002"}, undefined );
                }

                user = user.toObject();
                delete user.password;

                var token = createToken (user);

                return callback (undefined, {user:user, token:token});

            });
        });
};

exports.signup = function ( email, password, callback ) {
    User.findOne({email:email}, function (err, existingUser){

        if(existingUser) {
            return callback ( {message: "Email is already taken!", code: "INS0002 "}, undefined );  
        }

        var user = new User({
            email: email,
            password: password
        });

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash){
                user.password = hash;
                user.save(function() {
                    
                    user = user.toObject();
                    delete user.password;

                    var token = createToken(user);
                    
                    return callback(undefined, {user:user, token:token});
                });
            });
        });
    });
};

