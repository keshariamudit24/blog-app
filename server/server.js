const express = require("express");
const mongoose = require("mongoose");
const userApp = require("./API/userAPI")
const authorApp = require("./API/authorAPI")
require('dotenv').config(); // process.env

const app = express();
//body parser middleware
app.use(express.json());

const port = process.env.PORT || 4000;

// database connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => app.listen(port, () => { console.log(`listening on port ${port}`) }))
    .catch()


// connect API routes 
app.use('/user-api', userApp);
app.use('/author-api', authorApp);