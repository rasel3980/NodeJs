const express = require('express');
const app = express();
const PORT = 3000;
app.get('/',(req,res)=>{
    res.send('Hello i am home route')
});
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})