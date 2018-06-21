var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([
      {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
      },
      {
          id: '1',
          message: 'Bye!',
          end: true,
      },
  ]);
});

module.exports = router;
