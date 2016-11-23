var express = require('express');
var mongoose = require('mongoose');

// initialize app
var app = express();

// define port
var port = process.env.PORT || 8888;

// serve static files
app.use(express.static(__dirname + '/public'));



// listen to port
app.listen(port, function() {

	console.log("listening on port " + port);
	
});