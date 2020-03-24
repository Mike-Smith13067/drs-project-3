const authRouter = require('express').Router();
const db = require("../models");
const passport = require("../middleware/passport");
const passportAdmin = require("../middleware/passportAdmin");

authRouter.route('/login')
    .post(passport.authenticate('local', {
        failureRedirect: '/auth/loginFailed',
        successRedirect: '/auth/loginSuccess'
    }), (req, res, next) => {
        res.status(200).send();
    });
authRouter.route('/login/admin')
    .post(passportAdmin.authenticate('local', {
        failureRedirect: '/auth/loginFailed',
        successRedirect: '/auth/loginSuccess'
    }), (req, res, next) => {
        res.status(200).send();
    });

authRouter.route('/loginSuccess')
.get((req, res, next) => {
    res.json({
        message: "Successful login!!",
        status: 200
    });
});

authRouter.route('/loginFailed')
    .get((req, res, next) => {
        res.json({
            message: "Incorrect username or password",
            status: 401
        });
    });

authRouter.route(`/isauthenticated`)
    .get((req, res, next) => {
        if(req.user) {
            res.status(200).send(); 
        }else{
            res.status(401).send();
        }
    });

authRouter.route(`/logout`)
    .get((req, res, next) => {
        req.logout();
        res.redirect(`/`);
    });

authRouter.route('/admin/create')
    .post((req, res, next) => {
        db.Admin.create({...req.body})
            .then(user => {
                if(user){
                    res.status(200).send();
                }else{
                    res.status(404).send();
                }
            });
    });

authRouter.route('/isadmin')
    .get((req, res, next) => {
        db.Admin.findById(req.user)
            .then(user => {
                if(user){
                    res.status(200).send();
                }else{
                    res.status(404).send();
                }
            })
            .catch(err => {
                console.log(err);
                res.status(404).send();
            })
    })

module.exports = authRouter;