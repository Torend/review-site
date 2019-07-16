let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let reviewssSchema = new Schema({
    username: String,
    restaurant: Number,
    bathroom: Number,
    staff: Number,
    clean: Number,
    drive: Number,
    delivery: Number,
    food: Number
});

module.exports = mongoose.model('reviews', reviewssSchema);
