var express = require('express');
var router = express.Router();

// 投稿関係のAPI

router.get('/', (req, res) => {
    res.status(501).end();
});

router.get('/:postId', (req, res) => {
    res.status(501).end();

});

router.post('/', (req, res) => {
    res.status(501).end();
});

module.exports = router;