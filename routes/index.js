var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'New User' });
});



module.exports = router;
