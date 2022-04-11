const express = require("express");
const cors = require("cors");
const path = require("path");
const questions = require("./routes/questions");
require("dotenv").config();
const pool = require("./db/pool");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/questions/:topicId/:isSyntax", questions.getQuestions);

app.get("/topics", questions.getTopics);

// DEFAULT

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/src/pages/404.jsx"));
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
