const Nice = require('../models/nice');

const controller = {};

controller.niceCreate = (req, res, next) => {
    Nice.create(req.userId, req.postId);
    res.status(200).end();
};

controller.niceDelete = (req, res, next) => {
    Nice.delete(req.userId, req.postId);
    res.status(200).end();
};

controller.niceExists = (req, res, next) => {
    var niceExists = Nice.exists(req.userId, req.postId);
    res.send({
        "niceExists": niceExists
    });
};

controller.niceCount = (req, res, next) => {
    var count = Nice.count(req.postId);
    res.send({
        "count": count
    });
};

module.exports = controller;