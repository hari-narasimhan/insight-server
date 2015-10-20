"use strict";

var express             = require('express');
var router              = express.Router();
var ProductService = require('../../services/product-service');

// POST /api/v1/businessUnits
router.post('/', function (req, res) {

    ProductService.create( req.body, function (err, result) {
        
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
    
    ProductService.query(req.params.query || {}, 
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
   ProductService.get(req.params.id, function (err, result) {
      if(err) {
          return res.status(400).send(err);
      }
      res.send(result);
   });
});


// PUT /api/v1/businessUnits/:id
router.put('/:id', function(req, res) {
   ProductService.update(req.params.id, req.body, function(err, result){
      if (err) {
          return res.status(400).send(err);
      } 
      res.send(result);
   });
});

// DELETE /api/v1/businessUnits/:id
router.delete('/:id', function(req, res) {
   ProductService.remove(req.params.id, function(err, result){
      if (err) {
          return res.status(400).send(err);
      } 
      res.send(result);
   });
});

module.exports = router;