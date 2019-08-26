const express = require('express');
const logger = require('morgan');

const postRouter = require('./routes/postRouter');
const niceRouter = require('./routes/niceRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.use('/posts', postRouter);
app.use('/nices', niceRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
