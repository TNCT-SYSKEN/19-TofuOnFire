const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const postRouter = require('./routes/postRouter');
const niceRouter = require('./routes/niceRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.use('/images', express.static('./public/images'));

app.use('/posts', postRouter);
app.use('/nices', niceRouter);
app.use('/users', userRouter);

app.use(function(req, res, next) {
    next(createError(404, "The page was not found."));
});

app.use(function(err, req, res, next) {
    res.send({
        "error": err
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
