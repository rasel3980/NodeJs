const path = require('path');

// console.log(__dirname);
// console.log(__filename);

// Check extension
const extensionName = path.extname('index.css');
console.log(extensionName);

const joinPath = path.join(__dirname + '/../build-in-module');
console.log(joinPath);