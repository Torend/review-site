let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let restaurantsSchema = new Schema({
    name: String,
    location: [Number],
    reviews: [String]

});

module.exports = mongoose.model('restaurants', restaurantsSchema);
