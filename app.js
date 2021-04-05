/**========================================================================
 * *                                App.js
 *   Setup express with required static and routes middleware.
 *   Define the routes chained for pages ending with the error routes.
 *
 *========================================================================**/

"use strict";

const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.use('/fontawesome', express.static('node_modules/@fortawesome/fontawesome-free'));
app.use('/animate', express.static('node_modules/animate.css'));
app.set('view engine', 'pug');
const {error404, internalError} = require('./routes/errors');

app.use(require('./routes'));
app.use('/projects/project', require('./routes/projects'));
app.use(error404);
app.use(internalError);

app.listen(3000, () => {
  console.log('New Node Server Start :3000');
});