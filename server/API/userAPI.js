const express = require("express")
const userApp = express.Router();
const expressAsyncHandler = require("express-async-handler");
const createUserOrAuthor = require("./createUserOrAuthor")
const userAuthorMod = require("../models/userAuthorModel")
const Article = require("../models/articleModel")

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

// add a comment : which article? -> articleId 
userApp.put("/comment/:articleId", expressAsyncHandler(async (req, res) => {
    // find which article to comment on
    const getArticleForComment = req.params.articleId;
    // get the req 
    const commentReq = req.body;
    // get the article based on the articleId from the db
    const reqArticle = await Article.findOne({ articleId: getArticleForComment });

    // add the comment 
    reqArticle.comments.push(commentReq);
    await reqArticle.save();

    // response 
    res.status(201).send({ 
        msg: "comment added",
        payload: reqArticle.comments
    })
}))


module.exports = userApp;