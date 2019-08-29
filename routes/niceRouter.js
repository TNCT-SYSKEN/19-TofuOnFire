const express = require('express');
const router = express.Router();

const Post = require('../models/post');
const User = require('../models/user');
const createError = require('http-errors');

const niceController = require('../controllers/niceController');

// いいね関係のAPI

router.put('/:userId(\\d+)/:postId(\\d+)', niceController.niceCreate);
router.delete('/:userId(\\d+)/:postId(\\d+)', niceController.niceDelete);
router.get('/:userId(\\d+)/:postId(\\d+)', niceController.niceExists);
router.get('/:postId(\\d+)', niceController.niceCount);

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