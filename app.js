const express = require('express');
const logger = require('morgan');

var postRouter = require('./routes/postRouter');
var likeRouter = require('./routes/likeRouter');
var userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.use('/posts', postRouter);
app.use('/likes', likeRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
