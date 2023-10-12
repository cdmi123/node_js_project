
var mongoose = require('mongoose');

//schema
var userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
            type:String
    },
    image:{
        type:String
    },
    otp:{
        type:Number
    }
});

module.exports = mongoose.model('user',userSchema);