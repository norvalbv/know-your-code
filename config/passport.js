const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy();
const pool = require("./db/pool");

app.use(passport.initialize());
app.use(passport.session());

app.use(
  new LocalStrategy(function (username, password, done) {
    db.users.findByUsername(username, (err, user) => {
      if (err) return done(err);

      if (!user) return done(null, false);

      if (user.password != password) return done(null, false);

      return done(null, user);
    });
  })
);
