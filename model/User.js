var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    zeilaID: {type: Number, unique: true},
    name: {type: String, default: null},
    facebookID: {type: String, default: null},
    zeilaToken: {type: String, unique: true},
    email: {type: String, unique: false, default: null},
    phoneNumber: {type: String, unique: true, default: null},
    password: {type: String, default: null},
    profilePicture: {type: String, default: null},
    reviews: [
        {type: String}
    ],
    friends: [
        {type: String}
    ]
})

var User = mongoose.model('users101', userSchema)
module.exports = User