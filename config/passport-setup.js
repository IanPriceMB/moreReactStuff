const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys')
const User = require('../models/user-model')

passport.serializeUser((user, done)=> {
    done(null, user.id); 
})

passport.deserializeUser((id, done)=> {
    User.findById(id).then((user) => {
        done(null, user); 
    })
})

passport.use(
    new GoogleStrategy({
        //options for the strategy
        callbackURL: 'http://localhost:3001/auth/passport/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        //check if user already exists in our db
        console.log(profile)
        User.findOne({googleId: profile.id}).then((currentUser)=> {
            if(currentUser){
                //already have  the user
                console.log('user is: ' + currentUser);
                done(null, currentUser)
            } else {
                //if not, create user in our db
                new User({
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser);
                    done(null, newUser);
                })
            }
        })

    })
)