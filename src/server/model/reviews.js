let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let reviewsSchema = new Schema({
    username: String,
    restaurant: String,
    bathroom: Number,
    staff: Number,
    clean: Number,
    drive: Number,
    delivery: Number,
    food: Number,
    pictures: [{ data: Buffer, contentType: String }]
});

module.exports = mongoose.model('reviews', reviewsSchema);
