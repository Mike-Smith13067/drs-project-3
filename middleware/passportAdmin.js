const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;

const db = require(`../models`);

passport.use(new LocalStrategy(
    {
        usernameField: `email`
    },
    function(email, password, done) {
        db.Admin.findOne({
            email: email
        }).then((dbAdmin) => {
            if(!dbAdmin) {
                return done(null, false, {
                    message: `Incorrect email`
                });
            }
            else if (!dbAdmin.authenticate(password)) {
                return done(null, false, {
                    message: `Incorrect password.`
                });
            }
            return done(null, dbAdmin);
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(user, cb) {
    cb(null, user);
});

module.exports = passport;