
var config = require('./config.global');

config.env = "production";

//config.app.port = process.env.port || 3030;

//config.db.host = "your.production.url";
//config.db.dbName = "insightProd";
config.db.url = process.env.db || 'localhost';

// Most default values are for the dev env, so we need not do anything here
module.exports = config;