var express = require('express');
var router = express.Router();

// ユーザ関係のAPI

router.get('/:userId', (req, res) => {
    res.status(501).end();
});

router.post('/', (req, res) => {
    res.status(501).end();
});

router.delete('/:userId/:postId', (req, res) => {
    res.status(501).end();
});


module.exports = router;