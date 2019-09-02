const Nice = require('../models/nice');

const controller = {};

controller.niceCreate = (req, res, next) => {
    Nice.create(req.userId, req.postId, () => {
        res.status(204).end();
    });
};

controller.niceDelete = (req, res, next) => {
    Nice.delete(req.userId, req.postId, () => {
        res.status(204).end();
    });
};

controller.niceExists = (req, res, next) => {
    Nice.exists(req.userId, req.postId, (val) => {
        res.send({
            "niceExists": val
        });
    });

};

controller.niceCount = (req, res, next) => {
    Nice.count(req.postId, (val) => {
        res.send({
            "niceCount": val
        });
    });
};

module.exports = controller;