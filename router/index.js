"use strict";

module.exports = function(app) {
    app.use('/', require('./routes'));
    app.use('/auth', require('./routes/auth'));
    app.use('/api/v1/businessUnits', require('./routes/business-unit'));
    // app.use('/api/v1/users', require('./routes/v1/users'));
};