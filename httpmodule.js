import http, { createServer, } from 'http';
import { Console } from 'console';
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>This is Yogesh</h1>`)
})
server.listen(port, () => {
    console.log(`Server listening of port ${port}`)
})