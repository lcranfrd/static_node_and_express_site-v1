/**========================================================================
 * *                                errors.js
 *   Middleware handler functions for 404 and 500 error conditions
 *   This is for Exceeds Expectations
 * 
 *========================================================================**/

const error404 = ((req, res) => {
  const err = new Error('Requested Resource Not Found')
  const { originalUrl } = req;
  const classErr = 'error-404';
  err.status = 404;
  console.log(`Page Not Found Issued For: ${originalUrl} ${err.status}`)
  res.status(err.status);
  res.render('page_not_found', {err, originalUrl, classErr});
});

const internalError = ((err, req, res, next) => {
  err.message = 'Internal Server Error, It\'s Not Your Fault!';
  const classErr = 'error-500';
  err.status = 500;
  console.log(`Internal Error Issued: ${err.status}`)
  res.status(err.status);
  res.render('error', {err, classErr});
});

module.exports = {error404, internalError};