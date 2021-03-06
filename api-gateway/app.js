/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   25 Mar 2021
; Modified by: Eunice Lim
; Description: The application file
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var app = express();
var apiCatalog = require('./routes/api-catalog'); //Added for week 2. Require statement for api-catalog routes
const { EINPROGRESS } = require('constants');

/***Database connection*/
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1.ltgx9.mongodb.net/api-gateway', {
  promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
  .catch( (err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiCatalog); //Register the API Catalog’s routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error ("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
