const express = require("express")
const authorApp = express.Router();

userApp.get('/', (req, res) => {
    res.json({
        msg: "from admin API"
    });
})

module.exports = authorApp;