"use strict";

var express             = require('express');
var router              = express.Router();
var BusinessUnitService = require('../../services/businessUnit-service');

// POST /api/v1/businessUnits
router.post('/', function (req, res) {

    BusinessUnitService.create( req.body, function (err, result) {
        
        console.log(req.body);
        if(err) {
            return res.status(400).send(err);
        }
        
        // TODO format reponse
        res.send(result);
    });
});

// GET /api/v1/businessUnits
router.get ('/',  function (req, res) {
    
    BusinessUnitService.query(req.params.query || {}, 
        req.query.page, 
        req.query.limit, function (err, result) {
        if (err) {
            return res.status(400).send(err);
        }
        // TODO format the response
        res.send(result);
    });
});


// GET /api/v1/businessUnits/:id
router.get('/:id', function (req, res) {
   BusinessUnitService.get(req.params.id, function (err, result) {
      if(err) {
          return res.status(400).send(err);
      }
      res.send(result);
   });
});


// PUT /api/v1/businessUnits/:id
router.put('/:id', function(req, res) {
   BusinessUnitService.update(req.params.id, req.body, function(err, result){
      if (err) {
          return res.status(400).send(err);
      } 
      res.send(result);
   });
});

// DELETE /api/v1/businessUnits/:id
router.delete('/:id', function(req, res) {
   BusinessUnitService.remove(req.params.id, function(err, result){
      if (err) {
          return res.status(400).send(err);
      } 
      res.send(result);
   });
});

module.exports = router;