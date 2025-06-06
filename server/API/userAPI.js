const express = require("express")
const userApp = express.Router();

userApp.get('/', (req, res) => {
    res.json({
        msg: "from user API"
    });
})

module.exports = userApp;