const express = require('express');
const { getAllUser ,createUser,updateUser} = require('../controllers/users.controllers');
const router = express.Router();
router.get('/',getAllUser)
router.post('/',createUser)
router.put('/:id',updateUser)

module.exports = router;