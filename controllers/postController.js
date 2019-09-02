const Post = require('../models/post');
const createError = require('http-errors');

const controller = {};

controller.postList = (req, res, next) => {
    const list = Post.getList();
    res.send(list);
};

controller.postDetail = (req, res, next) => {
    const detail = Post.getDetail(req.postId);
    res.send(detail);
};

controller.postCreate = (req, res, next) => {
    const userId = req.body.userId;
    if (!userId) {
        next(createError(400, "The required data, userId, is missing."));
        return;
    }

    const title = req.body.title;
    if (!title) {
        next(createError(400, "The required data, title, is missing."));
        return;
    }

    const files = req.files;
    if (files.length === 0) {
        next(createError(400, "The required data, images, are missing."));
        return;
    }

    const imageLinks = files.map((file, index, array) => {return `/images/${file.filename}`});
    Post.create(
        userId,
        title,
        imageLinks
    );

    res.status(200).end();
};

module.exports = controller;