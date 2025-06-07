const express = require("express")
const authorApp = express.Router();
const expressAsyncHandler = require("express-async-handler");
const createUserOrAuthor = require("./createUserOrAuthor")

// create new author 
authorApp.post("/author", expressAsyncHandler(createUserOrAuthor))
// create an article 
authorApp.post("/article", expressAsyncHandler(async (req, res) => {
    const authorArticle = req.body
    console.log(authorArticle)
}))

// export 
module.exports = authorApp;