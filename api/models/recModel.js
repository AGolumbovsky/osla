var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recSchema = new Schema({

    word: String, 
    partSp: String, 
    chapter: String,
    description: String

});

// create a model for words
var Rec = mongoose.model('Rec', recSchema);

module.exports = Rec;