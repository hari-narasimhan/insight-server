"use strict";

var BusinessUnit = require('../models/BusinessUnit'),
    ServiceHelper = require('./service-helper'),
    mongoose = require('mongoose'),
    ObjectId = mongoose.Types.ObjectId,
    _ = require('lodash');

exports.create = function(data, callback) {
    var entity = _.pick(data, 'name', 'description', 'keyParameters');
    
    BusinessUnit.findOne({name: entity.name}, function(err, existingBusinessUnit) {

           // Check if the business unit name is alaredy existing
           if(existingBusinessUnit) {
               return callback({message: "Business Unit name already taken", code: "INS0003"}, undefined);
           }
           
           // Create the business unit
           var bu  = new BusinessUnit(entity);
           
           return bu.save(function(err) {
               if(err) {
                   return callback(err, undefined);
               }
               return callback(undefined, bu);
           });
    });
};

exports.query = function (query, page, limit, callback) {
    
    var options = ServiceHelper.getQueryOptions(page, limit);
    BusinessUnit.count(query, function(countErr, count){
       if(countErr) {
           return callback(countErr, undefined);
       }   
       
       BusinessUnit.paginate(query, options , function(err, data){
            if(err) {
                return callback(err, undefined);
            }
            return callback (undefined, 
                { 
                    data: data, 
                    cursor: ServiceHelper.getCursor(options, count)
                }
            );
          });
    });

};

exports.get = function (id, callback) {
    if(!ObjectId.isValid(id)) {
        return callback({message: "Invalid Id passed, please check your id", code: "INS0004"}, undefined);
    }
    BusinessUnit.findById(id, function(err, data){
      if(err) {
          return callback (err, undefined);
      }
      if(!data) {
          return callback({message: "Business Unit does not exist", code: "INS0005"}, undefined);
      }
      return callback (undefined, data);
    });
};

exports.update = function (id, data, callback) {
        
        if(!data) {
            return callback({message: "Invalid request body", code: "INS0006"}, undefined);
        }

        var entity = _.pick(data, 'name', 'description', 'keyParameters');
        
        if(!ObjectId.isValid(id)) {
            return callback({message: "Invalid Id passed, please check your id", code: "INS0004"}, undefined);
        }
          
       BusinessUnit.findByIdAndUpdate(id, entity, function (err, data) {
           if(err) {
               return callback(err, undefined);
           }
           return callback(undefined, data);
       });
};

exports.remove = function (id, callback) {
       
        if(!ObjectId.isValid(id)) {
            return callback({message: "Invalid Id passed, please check your id", code: "INS0004"}, undefined);
        }
          
       BusinessUnit.findByIdAndRemove(id, function (err, data) {
           if(err) {
               return callback(err, undefined);
           }
           return callback();
       });
};