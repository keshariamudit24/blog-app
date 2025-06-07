const express = require("express")
const authorApp = express.Router();
const expressAsyncHandler = require("express-async-handler");
const createUserOrAuthor = require("./createUserOrAuthor")
const Article = require("../models/articleModel")

// create new author 
authorApp.post("/author", expressAsyncHandler(createUserOrAuthor))

// create an article 
authorApp.post("/article", expressAsyncHandler(async (req, res) => {
    const newArticleObject = req.body
    const newArticle = new Article(newArticleObject);
    const savedArticle = await newArticle.save();
    res.status(201).send({ msg: "Article created", payload: savedArticle });
}))

// read article
authorApp.get("/articles", expressAsyncHandler(async (req, res) => {
    const listOfArticles = await Article.find();
    res.status(200).send({ msg: "articles", payload: listOfArticles });
}))

// export 
module.exports = authorApp;