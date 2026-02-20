require('dotenv').config();
const express = require('express');
const app = express();
const hostName = process.env.BASE_URL;
const PORT =process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('Hello i am home route')
});
app.listen(PORT,()=>{
    console.log(`server running at ${hostName}:${PORT}`);
})