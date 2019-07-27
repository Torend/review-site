let AppModel = require('../model/restaurants');

let _handleError = function(err){
    if (err) return console.log(err);
};

module.exports = (app) => {
    // for restaurant creation
    app.post('/api/restaurants', function (req, res, next) {
        console.log('restaurant creation');
        console.log(req.body);
        AppModel
            .findOne({'name': req.body.name})
            .then(doc => {
                if (doc === null) {
                    let newDoc = new AppModel();
                    newDoc.name = (req.body.name);
                    newDoc.location = (req.body.location);
                    newDoc.reviews = ([]);
                    newDoc.save(_handleError);
                    res.json(newDoc);
                    res.end();
                    //res.status(200).send('New restaurant created')
                } else {
                    res.status(400).send('The restaurant is invalid')
                }
            });
        //next();
    });
    // for registration
    app.get('/api/users/restaurants/:name', function (req, res, next) {
        console.log(`restautants pgetost ${req.params.name}`);
        AppModel
            .findOne({'name': req.params.name})
            .then(doc => {
                if (doc === null) {
                    //res.status(200).send('The username is valid')
                } else {
                    res.status(400).send('The username is invalid')
                }
            });
    });
};
