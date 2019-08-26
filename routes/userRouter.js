const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

// ユーザ関係のAPI

router.get('/:userId', userController.user_exists);
router.post('/', userController.user_create);
router.delete('/:userId/:postId', userController.user_delete);

module.exports = router;