const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

router.get('/', (req, res) => {
  res.redirect('/projects');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects', (req, res) => {
  res.render('index', {projects});

});

module.exports = router;