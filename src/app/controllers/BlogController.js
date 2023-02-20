const Post = require("../models/postModel");
const { multipleMongooseToObject } = require("../../util/mongoose");
const uploadFile = require("../../middleware/uploadfile");

class BlogController {
  // [GET] /
  home(req, res, next) {
    Post.find({})
      .then((blogs) =>
        res.render("home", {
          blogs: multipleMongooseToObject(blogs),
        })
      )
      .catch(next);
  }
  // [GET] /blogs/:slug
  show(req, res, next) {
    res.render("blogs/show");
  }

  // [GET] /blogs/create
  create(req, res, next) {
    res.render("blogs/create");
  }

  // [POST] /blogs/store
  store(req, res, next) {
    // console.log(req.body, req.file);
    // res.send('OK')

    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      contnet: req.body.contnet,
      slug: req.body.slug,
      image: req.file.filename,
    });

    post.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err.message);
      }

      res.redirect("/");
    });
  }
}

module.exports = new BlogController();
