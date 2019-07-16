let AppModel = require('../model/restaurants');

let _handleError = function(err){
    if (err) return console.log(err);
};

module.exports = (app) => {
    // for reviews creation
    app.post('/api/reviews', function (req, res, next) {
        console.log('review post');
        //console.log(req);
        AppModel
            .findOne({'username': req.body.username, 'restaurant': req.body.restaurant})
            .then(doc => {
                if (doc === null) {
                    let newDoc = new AppModel();
                    newDoc.username = (req.body.username);
                    newDoc.restaurant = (req.body.restaurant);
                    newDoc.bathroom = (req.body.bathroom);
                    newDoc.staff = (req.body.staff);
                    newDoc.clean = (req.body.clean);
                    newDoc.drive = (req.body.drive);
                    newDoc.delivery = (req.body.delivery);
                    newDoc.food = (req.body.food);
                    newDoc.save(_handleError);
                    res.json(newDoc);
                    //res.status(200).send('New restaurant created')
                } else {
                    res.status(400).send('You already reviewed the restaurant.')
                }
            });
        //next();
    });
    // getting all reviews by restaurants
    app.get('/api/users/reviews/byres/:restaurant', function (req, res, next) {
        console.log(`reviews by rest  ${req.params.restaurant}`);
        AppModel
            .find({'restaurant': req.params.restaurant})
            .then(doc => {
                if (doc === null) {
                    res.status(400).send('No reviews for this restaurant.')
                } else {
                    res.json(doc)
                }
            });
    });
    // getting all reviews by username
    app.get('/api/users/reviews/byuser/:username', function (req, res, next) {
        console.log(`reviews by user  ${req.params.username}`);
        AppModel
            .find({'username': req.params.username})
            .then(doc => {
                if (doc === null) {
                    res.status(400).send('No reviews for this username.')
                } else {
                    res.json(doc)
                }
            });
    });
};