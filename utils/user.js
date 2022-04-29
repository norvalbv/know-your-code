const passport = require("passport");
const pool = require("../config/db/pool");
const bcrypt = require("bcrypt");

const userAuthenticate = (req, res) => {
  try {
    passport.authenticate("local", {
      failureRedirect: "/login",
    }),
      (req, res) => {
        res.redirect("profile");
      };
  } catch (err) {
    console.error(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(salt, hash);

    // const newUser = await pool.query(
    //   `INSERT INTO users (username, password) VALUES (${username}, ${hash})`
    // );
    // if (hash) res.status(201).json("user created");
  } catch (err) {
    console.error(err);
    res.status(501).json("user not created - error occured");
  }
};

const logoutUser = (req, res) => {
  try {
    req.logout();
    req.redirect("/");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  userAuthenticate,
  createUser,
  logoutUser,
};
