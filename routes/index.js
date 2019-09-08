var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lightbox' });
});

/* GET screens page. */
router.get('/screens', function(req, res, next) {
  res.render('screens', { title: 'Screens | Lightbox' });
});

/* GET shades page. */
router.get('/shades', function(req, res, next) {
  res.render('shades', { title: 'Shades | Lightbox' });
});

/* GET controller page. */
router.get('/controller', function(req, res, next) {
  res.render('controller', { title: 'Controller | Lightbox', layout: 'layout-controller' });
});

module.exports = router;
