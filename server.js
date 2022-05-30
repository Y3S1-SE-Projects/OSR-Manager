const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// const logger = require("./src/utils/logger");
// const config = require("./src/config/index");
// const DB_connect = require("./src/config/database.connection");

const app = express();
// const PORT = config.SOCKET_PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//routes
app.use("/student", require("./src/api/routes/Student.route"));
app.use("/auth", require("./src/api/routes/Authentication.route"));
app.use("/users", require("./src/api/routes/User.route"));
app.use("/posts", require("./src/api/routes/Post.route"));
app.use("/categories", require("./src/api/routes/Categories.route"));

// Accessing the path module
const path = require("path");

// middleware will import the client build folder to the server.
app.use(express.static(path.resolve(__dirname, "client", "build")));

// will ensure that the routes defined with React Router are working once the application has been deployed. It handles any requests by redirecting them to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

// app.listen(process.env.PORT || 4000, () => {
//   logger.info(`Server is up and running on port number: ${PORT}`);
//   DB_connect().then(() => {
//     logger.warn("MongoDB Connecting...");
//   });
// });
