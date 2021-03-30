"use strict";

const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');
const {error404, internalError} = require('./routes/errors');

app.use(require('./routes'));
app.use('/projects/project', require('./routes/projects'));
app.use(error404);
app.use(internalError);

app.listen(3000, () => {
  console.log('New Start On File Save');
});