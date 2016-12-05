var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wordSchema = new Schema({

    spelling: String, 
    partSp: String, 
    description: String

});

// create a model for words
var Word = mongoose.model('Word', wordSchema);

module.exports = Word;