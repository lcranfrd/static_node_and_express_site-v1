"use strict";

const express = require('express');
const cookieParser = require('cookie-parser');
const {projects} = require('./data.json');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {projects});
});

app.get('/about',(req, res) => {
  projects.forEach((v)=>console.log(v));
  res.render('about', {projects});
});

app.get('/project/:id', (req, res) => {
  res.render();
});

app.use((req, res) => {
  const err = new Error('Requested Resource Not Found');
  err.status = 404;
  res.status(err.status);
  res.render('error', {err});
});

app.use((err, req, res, next) => {
  err.message = 'Internal Server Error, It\'s Not Your Fault!';
  err.status = 500;
  res.status(err.status);
  res.render('error', {err});
});

app.listen(3000, () => {
  console.log('New Start On File Save');
});