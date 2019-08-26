const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// 投稿関係のAPI

router.get('/', postController.post_list);
router.get('/:postId', postController.post_detail);
router.post('/', postController.post_create);

module.exports = router;