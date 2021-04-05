/**========================================================================
 * *                                projects.js
 *   Route for individual projects.
 *   
 *========================================================================**/

const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');


router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  const project = projects[id];
  (project)? res.render('project', {project}): next();
});

module.exports = router;