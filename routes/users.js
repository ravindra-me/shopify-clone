var express = require('express');
var router = express.Router();
const user = require('../controller/user');
/* GET users listing. */

router.post('/', user.newUser);
router.get('/:id', user.singleUser);

module.exports = router;
