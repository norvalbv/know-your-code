const express = require("express");
const cors = require("cors");
const routes = require("./routes/html");
const trending = require("./routes/trendingquestions");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/html/allquestions", routes.getAllQuestions);

app.get("/trending/allquestions", trending.getTrendingQuestions);

app.get("*", (req, res) => {
  res.send("test");
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
