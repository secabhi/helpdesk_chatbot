var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([
      {
          id: '0',
          message: 'Welcome to Aruba Helpdesk ChatBot!',
          trigger: '1',
      },
      {
          id: '1',
          message: 'How may I assist you?',
          end: true,
      },
  ]);
});

module.exports = router;
