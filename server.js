// require global modules
var express = require('express');
var mongoose = require('mongoose');

// require local modules
var apiController = require('./api/controllers/apiController');
var Dict = require('./api/models/dictModel');

// initialize app
var app = express();

// define port
var port = process.env.PORT || 8888;

// serve static files
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://127.0.0.1/dictDB'); // localhost/myApp vs 127.0.0.1 xy knows...

var Word = mongoose.connection; // sam pridumal, nado proverit'

// listen to port
app.listen(port, function() {

	console.log("listening on port " + port);
	
});
