const Post = require('../../models/post');
const User = require('../../models/user');
const createError = require('http-errors');

const paramCheck = {
    checkPostId: (req, res, next, val) => {
        Post.exists(val, (postExists) => {
            if (!postExists) {
                next(createError(404, "The postId was not found."));
                return;
            }
            req.postId = val;
            next();
        });

    },
    checkUserId: (req, res, next, val) => {
        User.exists(val, (userExists) => {
            if (!userExists) {
                next(createError(404, "The userId was not found."));
                return;
            }
            req.userId = val;
            next();
        });
    }
};

module.exports = paramCheck;