const Post = require('../models/post');

const controller = {};

controller.postList = (req, res, next) => {
    var list = Post.list();
    res.send(list);
};

controller.postDetail = (req, res, next) => {
    var detail = Post.getDetail(req.postId);
    res.send(detail);
};

controller.postCreate = (req, res, next) => {
    res.status(200).end();
};

module.exports = controller;