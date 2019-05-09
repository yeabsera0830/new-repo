var mongoose = require('mongoose')
var placeSchema = new mongoose.Schema({
    placeID: {type: Number, unique: true},
    placeName: {type: String, unique: true},
    placeCoordinates: {unique: true},
    placeCatagory: {type: String, unique: false},
    placeProfilePicture: {type: String, unique: false},
    reviews: [
        {type: String, unique: false}
    ]
})

var Place = mongoose.model('places', placeSchema)
module.exports = Place