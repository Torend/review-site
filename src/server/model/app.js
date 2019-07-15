let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({
    username: String, location: [Number], reviews: [String]
});

module.exports = mongoose.model('users', appSchema);
