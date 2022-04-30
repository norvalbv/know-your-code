const passport = require("passport");
const pool = require("../config/db/pool");
const bcrypt = require("bcrypt");

const userAuthenticate = (req, res) => {
  try {
    passport.authenticate("local", {
      failureRedirect: "/login",
      successRedirect: "/profile",
    });
  } catch (err) {
    console.error(err);
  }
};

const createUser = async (req, res) => {
  try {
    const {
      sUPassword: password,
      sUConfirmPassword: confirmPassword,
      sUEmail: email,
      sUUsername: username,
    } = req.body;

    if (!username || !password || !confirmPassword || !email) {
      return res.status(409).send("Please enter all valid fields");
    }

    if (password !== confirmPassword) {
      return res.status(409).send("Passwords do not match");
    }

    if (password.length < 8) {
      return res.status(409).send("Password not secure enough");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const usernameFetch = await pool.query(
      `SELECT * FROM users WHERE username=$1`,
      [username]
    );

    if (usernameFetch.rows.length !== 0) {
      return res.status(409).send("Username taken");
    }

    const emailFetch = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);

    if (emailFetch.rows.length !== 0) {
      return res.status(409).send("Email address taken");
    }

    const newUser = await pool.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
      [username, email, hash]
    );

    if (newUser) {
      return res.status(201).send("User created");
    }
  } catch (err) {
    console.log(err);
    return res.status(501).send("User not created - error occured");
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
