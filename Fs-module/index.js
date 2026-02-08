const fs = require('fs');

// Fs write a file with writeFile function
fs.writeFile('demo1.txt','Hello i am Rasel , i learning Node.js', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successfully');
    }
})

// adding a new file with before file 

fs.appendFile('demo1.txt',' i am 23 years old', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successfully');
    }
})


// Read a file

fs.readFile('demo1.txt', 'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

// Rename 

fs.rename('demo.txt','demo2.txt',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('successfully');
    }
})

// Delete a file

fs.unlink('demo2.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully");
    }
})

// Check exist file

fs.exists('demo.txt',(result)=>{
    if(result){
        console.log("Found");
    }
    else{
        console.log("Not found");
    }
})