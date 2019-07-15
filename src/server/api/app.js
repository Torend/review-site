let AppModel = require('../model/app');

let _handleError = function(err){
    if (err) return console.log(err);
};

module.exports = (app) => {
    app.get('/api/load/tags', function(req, res) {
        console.log('app.get/api/load/tags');
        AppModel
            .findOne()
            .then(doc => {
                res.json(doc.tags);
                res.end();
            });

    });
    app.post('/api/load/images', function(req, res, next) {
        console.log('updating tag array');
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
    // for user creation
    app.post('/api/users', function(req, res, next) {
        console.log('users post');
        console.log(req);
        AppModel
            .findOne({'username': req.body.username})
            .then(doc => {
                if (doc === null) {
                    let newDoc = new AppModel();
                    newDoc.username = (req.body.username);
                    newDoc.location = (req.body.location);
                    newDoc.reviews = ([]);
                    newDoc.save(_handleError);
                }else {
                    res.status(400).send('The username is invalid')
                }
            });
        next();
    });
    // for registration
    app.get('/api/users/username/:username', function(req, res, next) {
        console.log(`users post ${req.params.username}`);
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
    // for profile viewing
    app.get('/api/users/:username', function(req, res, next) {
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
    // for all users
    app.get('/api/users', function(req, res, next) {
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
    //for own profile update
    app.put('/api/users/:username', function(req, res, next) {
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
