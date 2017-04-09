var bodyParser = require('body-parser');
var Rec = require('../models/recModel');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // get ALL
    app.get('/api/dict', function(req, res) {

        Rec.find({}, function(err, data) {

            if (err) throw err;

            res.send(data);

        })

    });

    // get one
    app.get('/api/dict/:word', function(req, res) {

        Rec.findOne({"word": req.params.word }, function(err, data) {

            if(err) throw err;

            res.send(data);

        })

    })

    // post to db
    app.post('/api/add', function(req, res) {
     
        var newRec = new Rec({

            word: req.body.word,
            partSp: req.body.partSp, 
            description: req.body.description

        });

        newRec.save(function(err, data) {

            if(err) throw err;

            res.send(data);

        });

    });

    // delete one
    app.delete('/api/dict/:word', function(req, res) {

        // to remember the info for the farewell message
        // do it differently
        var allThatsLeftOfIt = res.body.word;

        Rec.find({ "word": res.body.word }).remove(function(err) {

            if(err) throw err;

            res.send("it is no more");
            console.log("Is this what you wanted? I removed " + allThatsLeftOfIt);
        });
        

    })

}