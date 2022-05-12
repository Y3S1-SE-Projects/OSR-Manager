const express = require('express');
const cors= require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const connection = mongoose.connection;
const PORT = process.env.PORT || 4020;
const URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connection.once("open", () => {
    console.log("MongoDB Connection success!");
});

app.listen(PORT, ()=>{
    console.log('Server is up and running on port number: ',PORT)
})