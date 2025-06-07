const express = require("express")
const userApp = express.Router();
const expressAsyncHandler = require("express-async-handler");
const createUserOrAuthor = require("./createUserOrAuthor")

// create new user      
userApp.post("/user", expressAsyncHandler(createUserOrAuthor))

module.exports = userApp;