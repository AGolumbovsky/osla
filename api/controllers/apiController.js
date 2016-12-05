var bodyParser = require('body-parser');
var Word = require('../models/wordModel');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // get ALL
    app.get('/api/dict', function(req, res) {

        Word.find({}, function(err, data) {

            if (err) throw err;

            res.send(data);

        })

    });

    // get one
    app.get('/api/dict/:word', function(req, res) {

        Word.findOne({"spelling": req.params.spelling }, function(err, data) {

            if(err) throw err;

            res.send(data);

        })

    })

    // post to db
    app.post('/api/add', function(req, res) {
     
        var newWord = new Word({

            spelling: req.body.spelling,
            partSp: req.body.partSp, 
            description: req.body.description

        });

        newWord.save(function(err, data) {

            if(err) throw err;

            res.send(data);

        });

    });

    // delete one
    app.delete('/api/dict/:word', function(req, res) {

        // to remember the info for the farewell message
        // do it differently
        var allThatsLeftOfIt = req.body.thing;

        Word.find({ "wordspelling": req.body.word }).remove(function(err) {

            if(err) throw err;

            res.send("it is no more");
            console.log("Is this what you wanted? I removed " + allThatsLeftOfIt);

        });

    });

};