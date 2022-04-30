const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy();
const pool = require("./db/pool");

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((err, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  pool.query(
    "SELECT * from users WHERE username = $1",
    [id],
    (err, results) => {
      if (err) {
        return done(err);
      }
      console.log(`ID is ${results.rows[0].id}`);
      done(null, results.rows[0]);
    }
  );
});

passport.use(
  "local",
  new LocalStrategy((username, password, done) => {
    pool.query(
      `SELECT id, username, password from users where username = $1`,
      [username],
      (username,
      bcrypt.compare(password, hash, (err, user) => {
        if (err) return done(err);

        if (!user) return done(null, false);

        if (user.password != password) return done(null, false);

        return done(null, user);
      }))
    );
  })
);
