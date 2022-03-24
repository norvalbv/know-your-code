const express = require("express");
const cors = require("cors");
const path = require("path");
const html = require("./routes/html");
const js = require("./routes/javascript");
const css = require("./routes/css");
const trending = require("./routes/trendingquestions");
const misc = require("./routes/misc");
require("dotenv").config();
const pool = require("./db/pool");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/trending/:topic/search/:question", misc.filterQuestions);

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
