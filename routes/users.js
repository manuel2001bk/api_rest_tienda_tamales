const express = require('express');
const router = express.Router();
const userServices = require('../controllers/usersServices')

/* GET users listing. */
router.get('/usernameValidate/:username',userServices.userNameValidate)

module.exports = router;
