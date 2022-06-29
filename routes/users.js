const express = require('express');
const router = express.Router();
const userServices = require('../Controllers/usersServices')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Services Users   usernameValidate   , getAllUsers , signUp , login');
});
router.get('/usernameValidate/:username',userServices.userNameValidate)
router.get('/getAllUsers', userServices.getAllUsers)
router.post('/signUp',userServices.signUp)
router.post('/login',userServices.login)

module.exports = router;