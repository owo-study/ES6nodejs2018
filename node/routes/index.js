var express = require('express');
var router = express.Router(); // https://expressjs.com/en/4x/api.html#router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
