"use strict";

var express = require('express');
var router = express.Router();


// GET /

router.get('/',  function(req, res) {
    res.send('Welcome to the insight-server');
});


module.exports = router;
