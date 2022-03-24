const express = require("express");
const cors = require("cors");
const html = require("./routes/html");
const js = require("./routes/javascript");
const css = require("./routes/css");
const trending = require("./routes/trendingquestions");
require("dotenv").config();

const pool = require("./db/pool");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/html/allquestions", html.getHTMLQuestions);

app.get("/javascript/allquestions", js.getJSQuestions);

app.get("/css/allquestions", css.getCSSQuestions);

app.get("/trending/allquestions", trending.getTrendingQuestions);

app.get("/topics", async (req, res) => {
  try {
    const temp = await pool.query("SELECT * FROM topics;");
    res.send(temp.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("*", (req, res) => {
  res.send("test");
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
