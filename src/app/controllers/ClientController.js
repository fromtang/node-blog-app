const User = require('../models/users');
const Post = require('../models/posts');

class ClientController {
    // [GET] /
    home(req, res, next) {
        Post.find({})
            .then((blogs) => res.render('home', { blogs }))
            .catch(next);
    }
    // [GET] /blogs/:slug
    show(req, res, next) {
        res.render('blogs/show');
    }

    // [GET] /blogs/create
    create(req, res, next) {
        res.render('blogs/create');
    }

    // [POST] /blogs/store
    store(req, res, next) {
        res.json(req.body);
        // Post.create(req.body)
        //   .then(() => res.redirect('/'))
        //   .catch(error => {

        //   });
    }
}

module.exports = new ClientController();
