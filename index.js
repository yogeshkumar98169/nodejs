import http, { createServer, } from 'http';
import { Console } from 'console';
import fs from 'fs';

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/') {
        let a = fs.readFileSync('index.html')
        console.log(a.toString);
        res.end(a);

    }
    else if (req.url == '/about') {
        res.end(`<h1>This is Yogesh About</h1>`)
    }
    else if (req.url == '/downloads') {
        res.end(`<h1>This is the download section where you can download the question papers</h1>`)
    }
    else {
        res.statusCode = 404
        res.end(`${res.statusCode}<h1>Page not found</h1>`)
    }
})
server.listen(port, () => {
    console.log(`Server listening of port ${port}`)
})