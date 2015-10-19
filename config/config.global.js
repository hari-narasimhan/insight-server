"use strict";

var config = {app:{}, db:{}};

// set the default encvironment
config.env = "dev";

config.app.port = process.env.port || 3030;

config.db.host = "localhost";
config.db.dbName = "insightDev";
config.db.url = 'localhost';
config.SECRET_TOKEN = "$N@K3WR@NGL3R";

module.exports = config;