const mongoose = require("mongoose");

// define user/auther schema 
const userAuthorSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {   
        type: String,
        required: true,
        unique: true              
    },
    imgUrl: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {"strict" : "throw"})

// create model for user/author schema 
const userAuthorMod = mongoose.model('userauthor', userAuthorSchema);

// export 
module.exports = userAuthorMod;
