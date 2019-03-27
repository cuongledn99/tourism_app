var mongoose = require('mongoose');

var test = new mongoose.Schema({
    content:String,
    locationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'locations'
    }
});

module.exports = test;