"use strict";

var EngineeringUpdate = require('../models/EngineeringUpdate'),
    BusinessUnit      = require('../models/BusinessUnit'),
    ServiceHelper     = require('./service-helper'),
    mongoose          = require('mongoose'),
    ObjectId          = mongoose.Types.ObjectId,
    _                 = require('lodash'),
    async             = require('async');

var _fields = ['businessUnitId', 'businessUnit', 'month', 'year', 'focusAreas', 'activities', 'releases', 'completionReports'];

exports.create = function (data, callback) {

  var entity = _.pick(data, _fields);

  async.waterfall([
      function(cb) {
        BusinessUnit.findById(entity.businessUnitId, function(err, bu){
          if(err || !bu) {
            return cb({message: "Invalid business unit", code: "INS0008"});
          }
          cb();
        });
      },
      function(cb) {
        EngineeringUpdate
          .findOne (
            {businessUnitId: new ObjectId(entity.businessUnitId), year: entity.year, month: entity.month}, cb
          );
      },
      function (existingEngineeringUpdate, cb) {
        
        if ( existingEngineeringUpdate ) {
          return cb(null, existingEngineeringUpdate);
        }

        var engineeringUpdate = new EngineeringUpdate(entity);

        engineeringUpdate.save(cb);
      }
    ], callback);
}

exports.query = function(query, page, limit, callback) {

    async.waterfall([
      function(cb) {
        EngineeringUpdate.count(query, cb);
      }, 
      function(count, cb) {
        var options = ServiceHelper.getQueryOptions(page, limit);
        EngineeringUpdate.paginate(query, options, function(err, data){
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
    EngineeringUpdate.findById(id, function(err, data){
      if(err) {
          return callback (err, undefined);
      }
      if(!data) {
          return callback({message: "product does not exist", code: "INS0005"}, undefined);
      }
      return callback (undefined, data);
    });
};

exports.update = function (id, data, callback) {

  if(!data) {
    return callback({message: "Invalid request body", code: "INS0006"}, undefined);
  }

  var entity = _.pick(data, _fields );

  if(!ObjectId.isValid(id)) {
    return callback({message: "Invalid Id passed, please check your id", code: "INS0004"}, undefined);
  }

  async.waterfall([
    function(cb) {
      BusinessUnit.findById(entity.businessUnitId, function(err, bu){
      if(err || !bu) {
        return cb({message: "Invalid business unit", code: "INS0008"});
      }
      cb();
    });
  },function (cb) {
    EngineeringUpdate.findByIdAndUpdate(id, entity, cb);
  }
  ], callback);  
};

exports.remove = function (id, callback) {

  if(!ObjectId.isValid(id)) {
    return callback({message: "Invalid Id passed, please check your id", code: "INS0004"}, undefined);
  }

  EngineeringUpdate.findByIdAndRemove(id, function (err, data) {
  
   if(err) {
       return callback(err, undefined);
   }
   return callback();
  
  });
};