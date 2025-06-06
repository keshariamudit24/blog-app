const express = require("express")
const authorApp = express.Router();

authorApp.get('/', (req, res) => {
    res.json({
        msg: "from admin API"
    });
})

module.exports = authorApp;