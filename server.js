// require global modules
var express = require('express');
var mongoose = require('mongoose');

// require local modules
var apiController = require('./api/controllers/apiController');
var Dict = require('./api/models/wordModel');

// initialize app
var app = express();

// define port
var port = process.env.PORT || 8888;

// serve static files
app.use(express.static(__dirname + '/public'));

// mongoose.connect('mongodb://127.0.0.1/dictDB'); // localhost/myApp vs 127.0.0.1 xy knows...

mongoose.connect('mongodb://heroku_618862tq:mopo3ko00@ds153637.mlab.com:53637/heroku_618862tq');

var db = mongoose.connection; // sam pridumal, nado proverit'

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected, mongoose did it");
});

// act like you have a clue
apiController(app);

// listen to port
app.listen(port, function() {

	console.log("listening on port " + port);
	
});