const express = require('express');
const router = express.Router();
const niceController = require('../controllers/niceController');

const paramCheck = require('./common/paramCheck');


// いいね関係のAPI

router.put('/:userId(\\d+)/:postId(\\d+)', niceController.niceCreate);
router.delete('/:userId(\\d+)/:postId(\\d+)', niceController.niceDelete);
router.get('/:userId(\\d+)/:postId(\\d+)', niceController.niceExists);
router.get('/:postId(\\d+)', niceController.niceCount);

router.param(['postId'], paramCheck.checkPostId);
router.param(['userId'], paramCheck.checkUserId);

module.exports = router;