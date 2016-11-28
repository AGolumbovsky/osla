var bodyParser = require('body-parser');
var OsulaDB = require('../models/osulaModel');

module.exports = function(app) {

    app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));

    // get ALL
    app.get('/api/dict', function(req, res) {

        console.log("app.get in progress...")

        OsulaDB.find({}, function(err, data) {

            if (err) throw err;

            res.send(data);

            console.log("Here is the list of words: " + data[0]);
        })

    });

    // get one
    app.get('/api/dict/:word', function(req, res) {

        OsulaDB.findById({ _id: req.params.word }, function(err, data) {

            if(err) throw err;

            res.send(data);

            console.log("Found word: " + data)

        })

    })

    // post to db
    app.post('/api/add', function(req, res) {
        
        var newWord = OsulaDB({
            word: "testTest", 
            partSp: req.body.partSp, 
            description: req.body.description
        })

        newWord.save(function(err) {

            res.send("Great success POST");
        })

    })

    // delete one
    app.delete('/api/dict/:word', function(req, res) {

        // to remember the info for the farewell message
        // do it differently
        var allThatsLeftOfIt = req.body.thing;

        OsulaDB.find({ "word": req.body.word }).remove(function(err) {

            if(err) throw err;

            res.send("it is no more");
            console.log("Is this what you wanted? I removed " + allThatsLeftOfIt);

        });

    });

};