const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const pool = require("./config/db/pool");

// utils
const questions = require("./utils/questions");
const user = require("./utils/user");

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      pool: pool,
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    // Insert express-session options here
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// app UI data

app.get("/questions/:topicId/:isSyntax", questions.getQuestions);
app.get("/topics", questions.getTopics);

// login

app.post("/login", user.userAuthenticate);
app.post("/register", user.createUser);
app.get("/lougout", user.logoutUser);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/src/pages/404.jsx"));
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
