const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    heroesOfTheStorm: false,
    gamerTag: { type: String },
    rank: { type: String },
    heroesOfTheStormPrimary: { type: String},
    heroesOfTheStormSecondary: { type: String},
    age: { type: Number },
    city: { type: String },
    state: { type: String },
    googleId: { type: String, required: true },
    payed: false,
    type: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema)

module.exports = User;