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
        required: true
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

const userAuthor = mongoose.model('userauthor', userAuthorSchema);

// export 
module.exports = userAuthor;
