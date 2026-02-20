const express = require('express');
const PORT = 3000;
const app = express();



app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Home route</h1>')
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})