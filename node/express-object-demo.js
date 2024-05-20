const express = require('express')
const app = express()

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