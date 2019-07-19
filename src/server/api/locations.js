let AppModel = require('../model/locations');

let _handleError = function(err){
    if (err) return console.log(err);
};

module.exports = (app) => {

    // get all locations
    app.get('/api/locations', function (req, res, next) {
        console.log(`locations sent`);
        AppModel
            .find()
            .then(doc => {
                if (doc === null) {
                    res.status(400).send('No locations.')
                } else {
                    res.status(200).send(doc)
                }
            });
    });
};