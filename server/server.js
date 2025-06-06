const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config(); // process.env

const port = process.env.PORT || 4000;
mongoose.connect(process.env.MONGODB_URL);


app.listen(port, () => { console.log(`listening on port ${port}`) });