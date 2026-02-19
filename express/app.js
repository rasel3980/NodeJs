const express = require('express');
const userRoute = require('./routes/user.route');
const bodyParser = require('body-parser');
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

// Request with route parameter
app.get('/user/name/:name/id/:id',(req,res)=>{
    const {name,id} = req.params
    res.send(`User name is : ${name} , id: ${id}`)
});
// Request with header
app.get('/user/identy',(req,res)=>{
    const id = req.header('id');
    const name = req.header('name');
    res.send(`User name is: ${name} and id: ${id}`)
})
// json data post

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.post('/user/jsonInfo',(req,res)=>{
    const {name,id} = req.body;
    res.send(`Welcome to ${name} , your id : ${id}`)
})
// receive form data
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/form.html')
})
// send form data
app.post('/register',(req,res)=>{
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h2>My name is: ${fullName} and my age is: ${age}</h2>`)
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