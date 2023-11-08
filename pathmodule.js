const path = require('path');

let a = 'C:\\temp\\myfile.html'
console.log(path.basename(a))
console.log(path.dirname(a))
console.log(path.extname(a))
console.log(path.extname(__filename, a))