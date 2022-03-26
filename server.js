const express = require("express");
const cors = require("cors");
const path = require("path");
const questions = require("./routes/questions");
const misc = require("./routes/misc");
require("dotenv").config();
const pool = require("./db/pool");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// SEARCH QUERY

app.get("/:topic/search/:questiontype/:question", misc.filterQuestions);

app.get("/topics/:search", misc.filterTopics);

// Questions

app.get("/:topic/all/:questiontype", questions.getQuestions);

// TOPICS

app.get("/topics", async (req, res) => {
  try {
    const temp = await pool.query("SELECT * FROM topics;");
    res.send(temp.rows);
  } catch (error) {
    console.error(error);
  }
});

// DEFAULT

app.get("*", (req, res) => {
  res.send("test");
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
