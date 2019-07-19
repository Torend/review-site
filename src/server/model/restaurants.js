let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let restaurantsSchema = new Schema({
    name: String,
    location: String,
    reviews: [Schema.Types.ObjectId]

});

module.exports = mongoose.model('restaurants', restaurantsSchema);
