// const express = require('express');
// const router = express.Router();

const error404 = ((req, res) => {
  const err = new Error('Requested Resource Not Found')
  const { originalUrl } = req;
  err.status = 404;
  res.status(err.status);
  res.render('page_not_found', {err, originalUrl});
});

const internalError = ((err, req, res, next) => {
  err.message = 'Internal Server Error, It\'s Not Your Fault!';
  err.status = 500;
  res.status(err.status);
  res.render('error', {err});
});

module.exports = {error404, internalError};