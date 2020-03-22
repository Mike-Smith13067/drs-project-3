const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;

const db = require(`../models`);

passport.use(new LocalStrategy(
    {
        usernameField: `email`
    },
    function(email, password, done) {
        db.Customer.findOne({
            email: email
        }).then((dbCustomer) => {
            if(!dbCustomer) {
                return done(null, false, {
                    message: `Incorrect email`
                });
            }
            else if (!dbCustomer.authenticate(password)) {
                return done(null, false, {
                    message: `Incorrect password.`
                });
            }
            return done(null, dbCustomer);
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