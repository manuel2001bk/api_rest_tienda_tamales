const express = require('express');
const router = express.Router();
const userServices = require('../Controllers/usersServices')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/usernameValidate/:username',userServices.userNameValidate)
router.get('/getAllUsers', userServices.getAllUsers)

router.post('/signUp',userServices.signUp)

module.exports = router;
