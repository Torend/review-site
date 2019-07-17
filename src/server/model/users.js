let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({
    username: String, location: [Number], reviews: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('users', appSchema);
