"use strict";

var BusinessUnit = require('../models/BusinessUnit'),
    ServiceHelper = require('./service-helper'),
    mongoose = require('mongoose'),
    ObjectId = mongoose.Types.ObjectId,
    _ = require('lodash'),
    async = require('async');

exports.create = function (data, callback) {

  var entity = _.pick(data, 'name', 'description', 'keyParameters');

  async.waterfall([
      function(cb) {
        BusinessUnit.findOne({name: entity.name}, cb);
      },
      function (existingBU, cb) {
        
        if(existingBU) {
          return cb({message: "Business Unit name already taken", code: "INS0003"});
        }
        var businessUnit = new BusinessUnit(entity);

        businessUnit.save(cb);
      }
    ], callback);
}

exports.query = function(query, page, limit, callback) {

    async.waterfall([
      function(cb) {
        BusinessUnit.count(query, cb);
      }, 
      function(count, cb) {
        var options = ServiceHelper.getQueryOptions(page, limit);
        BusinessUnit.paginate(query, options, function(err, data){
          if(err) {
            return cb(err);
          }
          cb(err, {data: data, cursor: ServiceHelper.getCursor(options, count)});
        });
      }
    ], callback);
}

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

        var entity = _.pick(data, 'name', 'businessUnitId', 'businessUnit');
        
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