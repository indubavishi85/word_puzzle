var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    rand:{
        type:String
    },
    merge:{
        type:String
    },
})
module.exports=mongoose.model("word_puzzle",userschema);