const LocalStrategy = require("passport-local").Strategy;
const { initialize } = require("passport/lib");
const pool = require("./db/pool");

function initalize(passport) {
  console.log("initalized");

  const authenticateUser = (username, password, done) => {

  }

  passport.use(
    // "local",
    new LocalStrategy((username, password, done) => {
      console.log("STRATEGY");
      pool.query(
        `SELECT * from users where username = $1`,
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

  passport.serializeUser((err, done) => {
    console.log("SERalize")
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log("DESERIALIZE");
    pool.query("SELECT * from users WHERE id = $1", [id], (err, results) => {
      if (err) {
        return done(err);
      }
      console.log(`ID is ${results.rows[0].id}`);
      done(null, results.rows[0]);
    });
  });
}

module.exports = initalize;
