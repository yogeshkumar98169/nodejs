import express from 'express'
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send("This is the main page of the file")
})
app.get('/about', (req, res) => {
    res.send("This is the about of the page")
})
app.listen(port, () => {
    console.log(`Example app listening on port https://localhost:${port}`)
})