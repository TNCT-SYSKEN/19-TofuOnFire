const express = require('express');
const router = express.Router();

const Post = require('../models/post');
const User = require('../models/user');
const createError = require('http-errors');

const postController = require('../controllers/postController');

// 投稿関係のAPI

router.get('/', postController.post_list);
router.get('/:postId(\\d+)', postController.post_detail);
router.post('/', postController.post_create);

router.param(['postId'], (req, res, next, val) => {
    if (!Post.exists(val)) {
        next(createError(404, "The postId was not found."));
        return;
    }
    req.postId = val;
    next();
});

router.param(['userId'], (req, res, next, val) => {
    if (!User.exists(val)) {
        next(createError(404, "The userId was not found."));
        return;
    }
    req.userId = val;
    next();
});


module.exports = router;