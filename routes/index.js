var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var config = require('../config/main')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createzone', function(req, res, next){
  res.render('createzone', null)
})

router.get('/createcomment', function(req, res, next){
  res.render('createcomment', null)
})

router.get('/register', function(req, res, next){
  res.render('register')
})

router.get('/login', function(req, res, next){
  res.render('login', null)
})


module.exports = router;
