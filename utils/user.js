const passport = require("passport");
const pool = require("../config/db/pool");

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
    const newUser = await pool.query(
      `INSERT INTO users (username, password) VALUES (${username}, ${password})`
    );
    if (newUser) res.status(201).json("user created");
  } catch (err) {
    console.error(err);
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
