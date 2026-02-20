const express = require('express');
const PORT = 3000;
const app = express();

const middleWare = (req,res,next)=>{
    console.log('My middleWare');
    req.currentTime = new Date(Date.now())
    next();
}

app.get('/',middleWare,(req,res)=>{
    res.send('<h1>Welcome to Home route</h1>')
})
app.get('/login',middleWare,(req,res)=>{
    console.log('i am login route at.' + req.currentTime);
    res.send('<h1>Welcome to Login route</h1>')
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
    console.log('hello');
})