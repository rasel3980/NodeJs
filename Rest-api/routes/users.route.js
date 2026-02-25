const express = require('express');
const { getAllUser } = require('../controllers/users.controllers');
const router = express.Router();
router.get('/',getAllUser)

module.exports = router;