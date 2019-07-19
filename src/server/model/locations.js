let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let restaurantsSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('locations', restaurantsSchema);
