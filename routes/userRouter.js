const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

const paramCheck = require('./common/paramCheck');

// ユーザ関係のAPI

router.get('/:userId(\\d+)', userController.userExists);
router.post('/', userController.userCreate);
router.delete('/:userId(\\d+)/:postId(\\d+)', userController.userDelete);

router.param(['userId'], paramCheck.checkUserId);

module.exports = router;