const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

// route not found

app.use((req,res,next)=>{
    res.status(404).json({"message":"Your request is not valid route"})
})
module.exports = app;