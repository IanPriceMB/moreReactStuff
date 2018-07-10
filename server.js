const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./api-routes");
const authRoutes = require("./auth-routes");
const passportSetup = require('./config/passport-setup')
const app = express();
const keys = require('./config/keys')
const cookieSession = require('cookie-session');
const passport = require('passport')
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//initialize passport 
app.use(passport.initialize());
app.use(passport.session());

//cors?
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "/auth/passport/google");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/auth/passport/google', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });


//for cookies 
app.use(cookieSession({
  name: 'session',
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

// Add routes, both API and view
app.use(authRoutes);
app.use(apiRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/esportsScoutingServices");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
