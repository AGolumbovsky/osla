// require global modules
const express = require('express');
const mongoose = require('mongoose');

// require local modules
const apiController = require('./api/controllers/apiController');
const Dict = require('./api/models/recModel');

// initialize app
const app = express();

// define port
const PORT = process.env.PORT || 8888;

// redirect to http
// for heroku
app.use(function (req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  }
});

// serve static files
app.use(express.static(__dirname + '/public'));

// not sure why but need it to get rid of deprecation warning
mongoose.Promise = global.Promise;

// !!!! comes from *** heroku config --app osla | grep MONGODB_URI  ***
mongoose.connect('mongodb://heroku_618862tq:f0r1abdib4he2t56ij1v9qs10l@ds153637.mlab.com:53637/heroku_618862tq');
// mongoose.connect('mongodb://127.0.0.1/dictDB');


const db = mongoose.connection; // sam pridumal, nado proverit'

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected, mongoose did it");
});

// act like you have a clue
apiController(app);

// create a timestamp for nodemon
var currentDate = new Date();
var timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

// listen to port
app.listen(PORT, function() {
	
	console.log("osla express listening, port " + PORT + '/n' + timestamp);

});
