const express = require("express");
const cors = require("cors");
const routes = require("./routes/html");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/html/allquestions", routes.getAllQuestions);

app.get("*", (req, res) => {
  res.send("test");
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
