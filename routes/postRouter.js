const express = require('express');
const router = express.Router();

const Post = require('../models/post');
const User = require('../models/user');
const createError = require('http-errors');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
    
const upload = multer({ dest: './public/images', storage: storage });

const postController = require('../controllers/postController');

// 投稿関係のAPI

router.get('/', postController.postList);
router.get('/:postId(\\d+)', postController.postDetail);
router.post('/', upload.array('images', 4), postController.postCreate);

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