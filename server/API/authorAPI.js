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

// modify an article by article id
authorApp.put("/article/:articleId", expressAsyncHandler(async (req, res) => {
    
    // get modified article 
    const modifiedArticle = req.body;

    // get the articleId from the query
    const inputId = req.params.articleId;

    // find the article to modify
    const reqArticle = await Article.findOne({ _id: inputId });

    // update: 
    Object.assign(reqArticle, modifiedArticle);
    await reqArticle.save();

    // respone 
    res.status(200).send({
        msg: "article updated",
        payload: reqArticle
    })
}))

// export 
module.exports = authorApp;