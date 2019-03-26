var mongoose = require('mongoose');

var locations = new mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    shortDescription:{
        type:String
    },
    city:{
        type:String
    },
    content:{
        type:String
    },
    imageLink:{
        type:String
    }
});

module.exports = locations;