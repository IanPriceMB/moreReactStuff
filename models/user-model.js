const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // player
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    heroesOfTheStorm: {type: Boolean, default: false},
    gamerTag: { type: String, default: '' },
    rank: { type: String, default: '' },
    heroesOfTheStormPrimary: { type: String, default: '' },
    heroesOfTheStormSecondary: { type: String, default: '' },
    age: { type: Number, default: 15 },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    //university
    schoolName: { type: String, default: '' },
    scoutName: { type: String, default: '' },
    coach: { type: String, default: '' },
    heroesOfTheStormOffered: {type: Boolean, default: false},
    overwatchOffered: {type: Boolean, default: false},
    leagueOfLegendsOffered: {type: Boolean, default: false},
    schoolCity: { type: String, default: '' },
    schoolState: { type: String, default: '' },
    //various infos
    googleId: { type: String, required: true },
    payed: {type: Boolean, default: false},
    type: { type: String, default: '' },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema)

module.exports = User;