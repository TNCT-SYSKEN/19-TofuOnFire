var express = require('express');
var router = express.Router();

// いいね関係のAPI

router.put('/:userId/:postId', (req, res) => {
    res.status(501).end();
});

router.delete('/:userId/:postId', (req, res) => {
    res.status(501).end();
});

router.get('/:userId/:postId', (req, res) => {
    res.status(501).end();
});

router.get('/:postId', (req, res) => {
    res.status(501).end();
});

module.exports = router;