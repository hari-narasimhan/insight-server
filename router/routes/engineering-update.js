"use strict";

var express             = require('express');
var router              = express.Router();
var EngineeringUpdateService      = require('../../services/engineering-update-service');

// POST /api/v1/engineeringUpdates
router.post('/', function (req, res) {

    EngineeringUpdateService.create( req.body, function (err, result) {
        
        console.log(req.body);
        if(err) {
            return res.status(400).send(err);
        }
        
        // TODO format reponse
        res.send(result);
    });
});

// GET /api/v1/engineeringUpdates
router.get ('/',  function (req, res) {
    
    EngineeringUpdateService.query(req.params.query || {}, 
        req.query.page, 
        req.query.limit, function (err, result) {
        if (err) {
            return res.status(400).send(err);
        }
        // TODO format the response
        res.send(result);
    });
});


// GET /api/v1/engineeringUpdates/:id
router.get('/:id', function (req, res) {
   EngineeringUpdateService.get(req.params.id, function (err, result) {
      if(err) {
          return res.status(400).send(err);
      }
      res.send(result);
   });
});


// PUT /api/v1/engineeringUpdates/:id
router.put('/:id', function(req, res) {
   EngineeringUpdateService.update(req.params.id, req.body, function(err, result){
      if (err) {
          return res.status(400).send(err);
      } 
      res.send(result);
   });
});

// DELETE /api/v1/engineeringUpdates/:id
router.delete('/:id', function(req, res) {
   EngineeringUpdateService.remove(req.params.id, function(err, result){
      if (err) {
          return res.status(400).send(err);
      } 
      res.send(result);
   });
});

module.exports = router;