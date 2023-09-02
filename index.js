const express = require("express");
const connectDB = require("./DBUtils");
const cors = require("cors");
const colors = require("colors");
const users = require("./Routes/users");
const courses = require("./Routes/courses");
const dotenv = require("dotenv").config({ path: "./config.env" });

// MongoDb connect
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", users);
app.use("/api/courses",courses);

// Port Listen
app.listen(process.env.PORT, () => {
  console.log("server listening on port 8002....".cyan.bold);
});
module.exports = app;
