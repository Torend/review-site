let AppModel = require('../model/users');

let _handleError = function(err){
    if (err) return console.log(err);
};

module.exports = (app) => {
    // for user creation
    app.post('/api/users', function(req, res, next) {
        console.log('users bost');
        console.log(req.body.username);
        AppModel
            .findOne({'username': req.body.username})
            .then(doc => {
                if (doc === null) {
                    let newDoc = new AppModel();
                    newDoc.username = (req.body.username);
                    newDoc.location = (req.body.location);
                    newDoc.reviews = ([]);
                    newDoc.save(_handleError);
                    res.json(newDoc);
                    res.status(200).send('New user created')
                }else {
                    res.status(400).send('The username is invalid')
                }
            });
        //next();
    });
    // for registration
    app.get('/api/users/username/:username', function(req, res, next) {
        console.log(`users ghetto ${req.params.username}`);
        console.log(req.params.username);
        AppModel
            .findOne({'username': req.params.username})
            .then(doc => {
                if (doc === null) {
                    res.status(200).send('The username is valid')
                }else{
                    res.status(400).send('The username is invalid')
                }
            });
    });
    // for all users
    app.get('/api/users', function(req, res, next) {
        console.log(`users get all`);
        AppModel
            .find()
            .then(doc => {
                res.json(doc);
            });
    });
    // for profile viewing
    app.get('/api/users/:username', function(req, res, next) {
        console.log(`users get /${req.params.username}`);
        AppModel
            .findOne({'username': req.params.username})
            .then(doc => {
                if (doc === null) {
                    res.status(400).send('The username is invalid')
                }else{
                    res.json(doc);
                }
            });
    });
    //for own profile update
    app.put('/api/users/:username', function(req, res, next) {
        console.log('users post');
        AppModel
            .findOne({'username': req.param.username})
            .then(doc => {
                if (doc === null) {
                    res.status(400).send("User does not exist")
                }else {
                    if(req.body.username != undefined) // complete
                    {

                        newDoc.username = (req.body.username);
                    }
                    // do condition here aswell
                    newDoc.location = (req.body.location);
                    doc.save(_handleError);
                }
            });
    });
    //to create reviews
    app.post('/api/reviews', function(req, res, next) {
        console.log('users post');
        AppModel
            .findOne()
            .then(doc => {
                if (doc === null) {
                    let newDoc = new AppModel();
                    newDoc.tags.push(req.body.tag);
                    newDoc.save(_handleError);
                }else if (!doc.tags.includes(req.body.tag)) {
                    doc.tags.push(req.body.tag);
                    doc.save(_handleError);
                }
            });
        next();
    });
    // to get all reviews
    app.get('/api/reviews', function(req, res, next) {
        console.log(`users post /${req.params.username}`);
        AppModel
            .findOne({'username': req.params.username})
            .then(doc => {
                if (doc === null) {
                    res.status(200).send('The username is valid')
                }else{
                    res.status(400).send('The username is invalid')
                }
            });
    });
    //to edit reviews
    app.put('/api/reviews/:reviewId', function(req, res, next) {
        console.log('users post');
        AppModel
            .findOne()
            .then(doc => {
                if (doc === null) {
                    let newDoc = new AppModel();
                    newDoc.tags.push(req.body.tag);
                    newDoc.save(_handleError);
                }else if (!doc.tags.includes(req.body.tag)) {
                    doc.tags.push(req.body.tag);
                    doc.save(_handleError);
                }
            });
        next();
    });
    // to delete reviews
    app.delete('/api/reviews/:reviewId', function(req, res, next) {
        console.log(`users post /${req.params.username}`);
        AppModel
            .findOne({'username': req.params.username})
            .then(doc => {
                if (doc === null) {
                    res.status(200).send('The username is valid')
                }else{
                    res.status(400).send('The username is invalid')
                }
            });
    });

};
