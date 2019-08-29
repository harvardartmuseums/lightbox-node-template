var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET screens page. */
router.get('/screens', function(req, res, next) {
  res.render('screens', { title: 'Express' });
});

/* GET shades page. */
router.get('/shades', function(req, res, next) {
  res.render('shades', { title: 'Express' });
});

/* GET controller page. */
router.get('/controller', function(req, res, next) {
  res.render('controller', { title: 'Express' });
});

module.exports = router;
