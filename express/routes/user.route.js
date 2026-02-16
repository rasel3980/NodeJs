const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.send('get request for user login page')
});

router.get('/register',(req,res)=>{
    res.send('get request for user register page')
})


module.exports = router;