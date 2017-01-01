// require global modules
var express = require('express');
var mongoose = require('mongoose');

// require local modules
var apiController = require('./api/controllers/apiController');
var Dict = require('./api/models/wordModel');

// initialize app
var app = express();

// define port
const PORT = process.env.PORT || 8887;

// redirect to http
// for heroku
app.use(function (req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req, url);
  }
  else {
    next();
  }
});

// serve static files
app.use(express.static(__dirname + '/public'));

if(PORT === 8777) {
  mongoose.connect('mongodb://127.0.0.1/dictDB'); // localhost/myApp vs 127.0.0.1 xy knows...
}
else {
// !!!! comes from *** heroku config --app osula | grep MONGODB_URI  ***
mongoose.connect('mongodb://heroku_618862tq:f0r1abdib4he2t56ij1v9qs10l@ds153637.mlab.com:53637/heroku_618862tq');
}

var db = mongoose.connection; // sam pridumal, nado proverit'

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected, mongoose did it");
});

// act like you have a clue
apiController(app);

// listen to port
app.listen(PORT, function() {

	console.log("osula express listening,port " + PORT);
	
});