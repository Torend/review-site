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
                    newDoc.img.data = req.body.img;
                    newDoc.img.contentType = 'image/png';
                    newDoc.save(_handleError);
                    res.json(newDoc);
                    //res.end();
                    //res.status(200).send('New user created')
                }else {
                    res.status(400).send('The username is invalid')
                }
            });
        //next();
    });
    // for registration username check
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
    app.get('/api/users/get/:username', function(req, res, next) {
        console.log(`users get /${req.params.username}`);
        console.log(req.params.username);
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
    app.put('/api/users/update/:username', function(req, res, next) {
        console.log("profile update");
        console.log(req.body.username);
        AppModel
            .updateOne({'username': req.body.username}, {
                username: req.body.to_username,
                location: req.body.location
            })
            .then(doc => {
                console.log(doc.toString());
                res.json(doc);
            });
    });
    // to search users //TODO: complete using this by filters
    app.post('/api/users/search', function(req, res, next) {
        console.log(`users post /${req.body.username}`);
        AppModel
            .findOne({'username': req.body.username})
            .then(doc => {
                if (doc === null) {
                    res.status(400).send('The username is invalid')
                }else{
                    res.status(200).send('The username is valid')
                }
            });
    });

    app.post('/api/users/authenticate', function(req, res, next) {
        console.log("HYA");
        AppModel
            .findOne({'username': req.body.username})
            .then(doc => {
                if (doc === null) {
                    console.log(req.body.username);
                    res.status(400).send('The username is invalid');

                }else{
                    console.log(doc);
                    res.json(doc);
                }

            });
    });
};
