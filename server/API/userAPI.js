const express = require("express")
const userApp = express.Router();
const expressAsyncHandler = require("express-async-handler");
const createUserOrAuthor = require("./createUserOrAuthor")
const userAuthorMod = require("../models/userAuthorModel")

// create new user      
userApp.post("/user", expressAsyncHandler(createUserOrAuthor))

// get all the articles 
userApp.get("/articles", expressAsyncHandler(async (req, res) => {
    const articles = await userAuthorMod.find();
    res.status(200).send({
        msg: "articles",
        payload: articles
    })
}))

module.exports = userApp;