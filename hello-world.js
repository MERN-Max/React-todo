const express = require('express')
const app = express()
const port = 3000

app.get('/', (res, req) => {
    res.setEncoding('Hello World, from express');
})

app.listen(port, () => console.log(`Hello world app listening port ${port}!`))