const express = require('express');
const router = express.Router();

const niceController = require('../controllers/niceController');

// いいね関係のAPI

router.put('/:userId/:postId', niceController.nice_create);
router.delete('/:userId/:postId', niceController.nice_delete);
router.get('/:userId/:postId', niceController.nice_exists);
router.get('/:postId', niceController.nice_count);

module.exports = router;