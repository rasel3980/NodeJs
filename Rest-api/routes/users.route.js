const express = require('express');
const { getAllUser ,createUser} = require('../controllers/users.controllers');
const router = express.Router();
router.get('/',getAllUser)
router.post('/',createUser)

module.exports = router;