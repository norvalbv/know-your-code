const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy();
const pool = require("./db/pool");

app.use(passport.initialize());
app.use(passport.session());

const customFields = {
  usernameField: "uname",
  passwordField: "pw",
};

passport.serializeUser((err, done) => {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  pool.query(
    "SELECT id, username FROM users WHERE id = $1",
    [parseInt(id, 10)],
    (err, results) => {
      if (err) {
        return done(err);
      }
      done(null, results.rows[0]);
    }
  );
});

passport.use(
  "local",
  new LocalStrategy(function (username, password, done) {
    pool.query(
      `SELECT id, username, password from users where username=$1`,
      [username],
      (username,
      (err, user) => {
        if (err) return done(err);

        if (!user) return done(null, false);

        if (user.password != password) return done(null, false);

        return done(null, user);
      })
    );
  })
);
