var express = require('express');
var router = express.Router();
const user = require('../controller/user');

const auth = require('../middleware/auth');
/* GET users listing. */

router.post("/login", user.loginUser);
router.post('/', user.newUser);
router.get('/', auth.verifyToken, user.singleUser);
router.put('/', auth.verifyToken, user.updateInformation)

module.exports = router;
