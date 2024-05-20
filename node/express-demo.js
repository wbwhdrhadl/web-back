const express = require('express')
const app = express()

// GET + "/"
app.get('/', function(req,res) {
    res.send('Hello World')
})

// API : GET + "http://localhost:1234/test"

app.get('/test', function(req,res) {
    res.send('TEST SUCCESS')
})

// API : GET + "http://localhost:1234/test/1"
// "One!!"
app.get('/test/1', function(req,res) {
    res.send('One!')
})

// GET /hello, /bye, /nicetomeetyou
app.get('/hello', function(req,res) {
    res.send('hello')
})

app.get('/bye', function(req,res) {
    res.send('bye')
})

app.get('/nicetomeetyou', function(req,res) {
    res.send('nicetomeetyou')
})

app.listen(1234)