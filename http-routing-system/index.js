const http = require("http");
const fs = require('fs')
const PORT = 3000;
const hostName= '127.0.0.1'
const server = http.createServer((req,res)=>{
    const handleRoute = (statusCode,fileLocation)=>{
        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statusCode,{"Content-Type":"text/html"});
            res.write(data);
            res.end()
        })
    
    }
    console.log(req.url);
    if(req.url === '/'){
        handleRoute(200,'index.html')
    }
    else if(req.url === '/contact'){
        handleRoute(200,'contact.html')
    }
    else if(req.url === '/about'){
        handleRoute(200,'about.html')
    }
})
server.listen(PORT,()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
})