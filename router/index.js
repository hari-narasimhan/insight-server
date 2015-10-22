"use strict";
var express = require('express');
var router = express.Router();



module.exports = function( app ) {

    require('./routes/business-unit')(router);
    require('./routes/product')(router);
    require('./routes/engineering-update')(router);
    require('./routes/sales-update')(router);
    require('./routes/marketing-update')(router);
    require('./routes/initiative')(router);
    require('./routes/key-metric')(router);
    require('./routes/opportunity')(router);
    require('./routes/user')(router);

    // Using traditional routing for auth
    app.use('/', require('./routes'));
    app.use('/auth', require('./routes/auth'));
    //app.use('/api/v1/businessUnits', require('./routes/business-unit'));
    //app.use('/api/v1/products', require('./routes/product'));
    //app.use('/api/v1/engineeringUpdates', require('./routes/engineering-update'));
    //app.use('/api/v1/salesUpdates', require('./routes/sales-update'));
    //app.use('/api/v1/marketingUpdates', require('./routes/marketing-update'));
    
    // app.use('/api/v1/users', require('./routes/v1/users'));

    app.use(router);
};

