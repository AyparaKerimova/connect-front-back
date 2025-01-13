const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    fullName: {
        type:String,
        require:true
    },
    url: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    }
});

module.exports = userSchema