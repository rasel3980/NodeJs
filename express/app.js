const express = require('express');
const userRoute = require('./routes/user.route')
const app = express();

app.use(('/api/user'),userRoute)
app.get('/',(req,res)=>{
    res.send('http get request')
})
app.get('/user/info',(req,res)=>{
    res.status(200).json({
        'name': 'Rasel',
        'message': 'successfully create json file',
        statusCode : 200,
    }
    )
});

// Request with query parameter
app.get('/user/query',(req,res)=>{
    const id = req.query.id;
    const name = req.query.name;
    res.send(`User name is: ${name} , id: ${id}`)
})
app.get('/user',(req,res)=>{
    res.cookie('name', 'Rasel')
    res.cookie('id', '7756786')
    res.status(200).send('checking user cookies')
})
 app.use((req,res)=>{
    res.send('<h1>404  your request is not a valid </h1>')
 })
module.exports=app;