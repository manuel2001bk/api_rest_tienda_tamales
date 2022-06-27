const express = require('express');
const userServices = require("../Controllers/usersServices");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getAllUsers', userServices.getAllUsers)

module.exports = router;
