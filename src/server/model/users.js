let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({
    username: String,
    location: String,
    reviews: [Schema.Types.ObjectId],
    img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('users', appSchema);
