let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let restaurantsSchema = new Schema({
    name: String,
    location: [Number],
    reviews: [Schema.Types.ObjectId]

});

module.exports = mongoose.model('restaurants', restaurantsSchema);
