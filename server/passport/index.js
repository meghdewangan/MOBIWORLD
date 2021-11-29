var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

const {User} = require('../db/models/userModel');

passport.use(new LocalStrategy({

    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
    session: true

}, function (req, email, password, next) {


    console.log("It is reached at stage 1")

    User.findOne({ email: email }, function (err, user) {

        console.log("It is reached at stage 2")

        if (err) { 
            console.log("we got an error", err)
            return next(err) 
        
        }
        if (!user) { 
            console.log("we didn't find any user")
            return next(null, false) 
        }

        // console.log(user)
        // next(null, user)

        user.checkPassword(password, function (err, isValid) {

            console.log("It is reached at stage 3")

            if (err) { return next(err) }
            if (!isValid) { return next(null, false) }

            return next(null, user);

        })

    })

}))

passport.serializeUser(function (user, next) {

    console.log("It is reached at stage 4")

    next(null, user._id)

})

passport.deserializeUser(function (userId, next) {
    
    console.log("It is reached at stage 5")


    User.findOne({ _id: userId }).exec( function (err, user) {
        if (err) { return next(err); }
        if (!user) { return next(null, false); }
        return next(null, user);
    } )

})
    
