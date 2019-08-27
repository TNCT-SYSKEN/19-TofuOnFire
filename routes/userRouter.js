const express = require('express');
const router = express.Router();

const Post = require('../models/post');
const User = require('../models/user');
const createError = require('http-errors');

const userController = require('../controllers/userController')

// ユーザ関係のAPI

router.get('/:userId(\\d+)', userController.user_exists);
router.post('/', userController.user_create);
router.delete('/:userId(\\d+)/:postId(\\d+)', userController.user_delete);

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