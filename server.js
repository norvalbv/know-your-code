const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const questions = require("./routes/questions");
require("dotenv").config();
const pool = require("./config/db/pool");

const PORT = process.env.PORT || 5000;
const app = express();

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

app.get("/questions/:topicId/:isSyntax", questions.getQuestions);

app.get("/topics", questions.getTopics);

app.get("*", (req, res) => {
  console.log(req.session);
  res.sendFile(path.join(__dirname, "client/src/pages/404.jsx"));
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
