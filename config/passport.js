const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const pool = require("./db/pool");

function initalize(passport) {
  console.log("initalized");

  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log("STRATEGY");
      const data = pool.query(
        `SELECT * FROM users WHERE username = $1`,
        [username],
        (err, results) => {
          if (err) {
            throw err;
          }
          const userPassword = results.rows[0].password;
          console.log(userPassword);

          bcrypt.compare(password, userPassword, (err, match) => {
            if (err) return done(err);

            if (!match) return done(null, false);

            if (userPassword != password) return done(null, false);
            console.log(user);

            return done(null, user);
          });
        }
      );
    })
  );

  passport.serializeUser((user, done) => {
    console.log("SERalize");
    console.log(user);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log("DESERIALIZE");
    pool.query("SELECT * from users WHERE id = $1", [id], (err, results) => {
      if (err) {
        return done(err);
      }
      // console.log(`ID is ${results.rows[0].id}`);
      done(null, results.rows[0]);
    });
  });
}

module.exports = initalize;
