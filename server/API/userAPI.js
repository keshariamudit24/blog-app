const express = require("express")
const userAuthor = require("../models/userAuthorModel")
const userApp = express.Router();

userApp.get('/user', (req, res) => {
    let userList = userAuthor.find();
    res.send({
        msg: "users",
        payload: userList
    })
})

module.exports = userApp;