var express = require('express');
var router = express.Router();

/* GET home page. */
let router1 = router.get('/', function(req, res, next) {
  res.render('index', { title: 'Schefing_API' });
  res.send('dsadas')
});
router.post('/', function(req, res, next) {
  res.send('')
})

module.exports = router;
