const path = require('path');//

const pathname = path.join(__dirname,'config','setting.js');// __dirname gives the current directory path
console.log(pathname);

console.log(path.basename(pathname));
