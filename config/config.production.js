
var config = require('./config.global');

config.env = "production";

//config.app.port = process.env.port || 3030;

//config.db.host = "your.production.url";
//config.db.dbName = "insightProd";
config.db.url = "mongodb://insight:admin1234@ds061721.mongolab.com:61721/insight";

// Most default values are for the dev env, so we need not do anything here
module.exports = config;