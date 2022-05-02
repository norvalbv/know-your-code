const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const pool = require("./config/db/pool");
const passport = require("passport");
const initializePassport = require("./config/passport");
const cookieParser = require("cookie-parser");

// utils
const questions = require("./utils/questions");
const user = require("./utils/user");

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(
  cors({
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      pool: pool,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2 * 60 * 60 * 1000 }, // 2 hours
  })
);

initializePassport(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.user);
  next();
});

// user routes

app.post("/login", user.loginUser);
app.post("/register", user.createUser);
app.get("/logout", checkAuthenticated, user.logoutUser);
app.get("/users", user.getUser);

// login middleware check.

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("user is authenticated");
    // will be returned if true that a user is logged
    next();
  } else {
    console.log("user is not authenticated");
  }
}

// app UI data

app.get("/questions/:topicId/:isSyntax", questions.getQuestions);
app.get("/topics", questions.getTopics);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/src/pages/404.jsx"));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
