var express = require('express');
var router = express.Router();
var translate = require('google-translate-api');

/* GET home page. */
router.post('/translate', function(req, res, next) {
  translate(req.body.text, {to: 'zh-CN'}).then(resObj => {
      res.json(resObj.text);
  }).catch(err => {
      console.error(err);
  });

});

module.exports = router;
