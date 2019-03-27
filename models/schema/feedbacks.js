var mongoose = require('mongoose');

var feedbacks = new mongoose.Schema({
    content:String,
    locationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'locations'
    }
});

module.exports = feedbacks;