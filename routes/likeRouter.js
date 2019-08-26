const express = require('express');
const router = express.Router();

const likeController = require('../controllers/likeController');

// いいね関係のAPI

router.put('/:userId/:postId', likeController.like_create);
router.delete('/:userId/:postId', likeController.like_delete);
router.get('/:userId/:postId', likeController.like_exists);
router.get('/:postId', likeController.like_count);

module.exports = router;