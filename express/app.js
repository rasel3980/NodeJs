const express = require('express');
const userRoute = require('./routes/user.route')
const app = express();

app.use(('/api/user'),userRoute)
app.get('/',(req,res)=>{
    res.send('http get request')
})

 app.use((req,res)=>{
    res.send('<h1>404  your request is not a valid </h1>')
 })
module.exports=app;