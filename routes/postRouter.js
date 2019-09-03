const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

const paramCheck = require('./common/paramCheck');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/');
    },
    filename: (req, file, cb) => {
        const regExFileName = /([\w\d_-]*)\.?[^\\\/]*$/i,
            regExFileNameExtension =/\.[0-9a-z]{1,5}$/i,
            fileNameBase = file.originalname.match(regExFileName)[1],
            fileNameExtension = file.originalname.match(regExFileNameExtension)[0],
            fileName = fileNameBase + '_' + Date.now() + fileNameExtension;
        cb(null, fileName);
    }
});
    
const upload = multer({ dest: './public/images', storage: storage });

// 投稿関係のAPI

router.get('/', postController.postList);
router.get('/:postId(\\d+)', postController.postDetail);
router.post('/', upload.array('images', 4), postController.postCreate);

router.param(['postId'], paramCheck.checkPostId);

module.exports = router;