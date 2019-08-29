const controller = {};

controller.postList = (req, res, next) => {
    res.status(501).end();
};

controller.postDetail = (req, res, next) => {
    res.status(501).end();
};

controller.postCreate = (req, res, next) => {
    res.status(200).end();
};

module.exports = controller;