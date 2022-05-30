const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const logger = require("./src/utils/logger");
const config = require("./src/config/index");
const DB_connect = require("./src/config/database.connection");

const app = express();
// const PORT = config.SOCKET_PORT || 4020;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(process.env.PORT || 4000, () => {
  logger.info(`Server is up and running on port number: ${PORT}`);
  DB_connect().then(() => {
    logger.warn("MongoDB Connecting...");
  });
});

//routes
app.use("/student", require("./src/api/routes/Student.route"));
app.use("/auth", require("./src/api/routes/Authentication.route"));
app.use("/users", require("./src/api/routes/User.route"));
app.use("/posts", require("./src/api/routes/Post.route"));
app.use("/categories", require("./src/api/routes/Categories.route"));

// middleware
app.use(express.static(path.join(__dirname, "/client/build")));

// When app gets any requests its going to redirect those to our client
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});
