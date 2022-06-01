const express = require("express");
const cors= require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const logger = require("./utils/logger");
const config = require("./config/index");
const DB_connect = require("./utils/database.connection");

const app = express();
const PORT = config.SOCKET_PORT || 4020;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, ()=>{
    logger.info(`Server is up and running on port number: ${PORT}`)
    DB_connect().then(() => {
        logger.warn("MongoDB Connecting...")
    });
})


//feature/chandur



//feature/abineshh
app.use("/student",require("./api/routes/Student.route"))
app.use("/auth", require("./api/routes/Authentication.route"));
app.use("/users", require("./api/routes/User.route"));
app.use("/posts", require("./api/routes/Post.route"));
app.use("/categories", require("./api/routes/Categories.route"));
app.use("/group", require("./api/routes/Group.route"));


//feature/zihara




//feature/sachini


