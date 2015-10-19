
var config = require('./config.global');

config.env = "test";

//config.app.port = process.env.port || 3030;

//config.db.host = "your.test.url";
//config.db.dbName = "insightTest";
//config.db.url = "your.test.url"

// Most default values are for the dev env, so we need not do anything here
module.exports = config;