const express = require("express")
const authorApp = express.Router();
const expressAsyncHandler = require("express-async-handler");
const createUserOrAuthor = require("./createUserOrAuthor")

// create new author 
authorApp.post("/author", expressAsyncHandler(createUserOrAuthor))


module.exports = authorApp;