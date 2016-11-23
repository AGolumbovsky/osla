var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var osulaSchema = new Schema({

    word: String, 
    partSp: String, 
    description: String

})

var OsulaDB = mongoose.model('OsulaDB', osulaSchema);

module.exports = OsulaDB;