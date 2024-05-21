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

app.get('/product/1', function(req,res) {
    res.send('Node.js를 배워보자 (책)')
    // res.send(200)
})

// object 객체 hello
app.get('/helloobj', function(req,res) {
    res.send({
        say: 'hello'
    })
})

// object 객체 bye
app.get('/byeobj', function(req,res) {
    res.json({
        say: 'bye'
    })
})

// product 객체형
app.get('/productobj/1', function(req,res) {
    res.send({
        title: "Node.js를 공부해보자",
        price: 20000,
        description: "이 책 좋음!"
    })
})

let nodejsBook = {
    title: "Node.js를 공부해보자",
    price: 20000,
    description: "이 책 좋음!"
}

// product method 전달
app.get('/productmethod/1', function(req,res) {
    res.send(nodejsBook)
})

app.listen(1234)