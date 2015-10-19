var express     = require('express');
var config      = require('./config');
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var cors        = require('cors');


var app = express();

mongoose.connect(config.db.url);

app.set('port', config.app.port)
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var router  = require('./router')(app);


app.listen(app.get('port'), function() {
    console.log('Insight server started at ' + app.get('port'));
});