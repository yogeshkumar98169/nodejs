const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log(err, data)
})
const a = fs.readFileSync('file.txt', 'utf8', (err, data) => {
    console.log(err, data)
})
const b = fs.readFileSync('file.txt')
console.log(b.toString())
console.log(a)
console.log("finished rading file");


//!Write in file
fs.writeFile('file.txt', 'This is the data', () => {
    console.log("successfully written to the file")
});
//!WriteFileSync
fs.writeFileSync('file.txt', "Hello my name is yogesh and i am here to tell you the most importatn thing that is present in the whole of the area in the real path")