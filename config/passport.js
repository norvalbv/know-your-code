const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const pool = require("./db/pool");

function initalize(passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      const data = pool.query(
        `SELECT * FROM users WHERE username = $1`,
        [username],
        (err, results) => {
          if (err) {
            throw err;
          }
          const user = results.rows[0];
          if (results.rows.length > 0) {
            bcrypt.compare(password, user.password, (err, result) => {
              if (err) return done(err);
              if (!result) return done(null, false);
              return done(null, user);
            });
          } else {
            return done(null, false);
          }
        }
      );
    })
  );

  passport.serializeUser((user, done) => {
    console.log(user, "serialize");
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log(id, "deserialize");
    pool.query("SELECT * from users WHERE id = $1", [id], (err, results) => {
      if (err) {
        return done(err);
      }
      done(null, results.rows[0]);
    });
  });
}

module.exports = initalize;
