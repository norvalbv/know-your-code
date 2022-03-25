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

// SEARCH QUERY

app.get("/:topic/search/:questiontype/:question", misc.filterQuestions);

// HTML

app.get("/html/all/questions", html.getHTMLAllQuestions);
app.get("/html/all/syntax", html.getHTMLAllQuestions);

// JS

app.get("/javascript/all/questions", js.getJavaScriptAllQuestions);
app.get("/javascript/all/syntax", js.getJavaScriptAllSyntax);

// CSS

app.get("/css/all/questions", css.getCSSAllQuestions);
app.get("/css/all/syntax", css.getCSSAllSyntax);

// ALL TRENDING

app.get("/trending/all/questions", trending.getTrendingAllQuestions);
app.get("/trending/all/questions", trending.getTrendingAllSyntax);

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
