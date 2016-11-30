var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wordSchema = new Schema({

    word: String, 
    partSp: String, 
    description: String

});

// create a model for words
var Dict = mongoose.model('Dict', wordSchema);

module.exports = Dict;