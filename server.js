const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const pool = require("./config/db/pool");
const passport = require("passport");
const initializePassport = require("./config/passport");

initializePassport(passport);

// utils
const questions = require("./utils/questions");
const user = require("./utils/user");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      pool: pool,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  })
);

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// app UI data

app.get("/questions/:topicId/:isSyntax", questions.getQuestions);
app.get("/topics", questions.getTopics);

// login

app.post("/login", checkAuthenticated, user.userAuthenticate);
app.post("/register", checkAuthenticated, user.createUser);
app.get("/logout", checkNotAuthenticated, user.logoutUser);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/src/pages/404.jsx"));
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // return res.redirect("/users/dashboard");
    console.log("USER IS AUTHENTICATED");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // return next();
    console.log("USER IS NOT AUTHENTICATED");
  }
  res.redirect("/users/login");
}

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
