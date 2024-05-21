const express = require('express')
const app = express()

app.listen(1234)

// app.get('/products/1' ,  function(req,res){
//     res.json({
//         num:1
//     })
// })

// app.get('/products/2' ,  function(req,res){
//     res.json({
//         num:2
//     })
// })

// app.get('/products/3' ,  function(req,res){
//     res.json({
//         num:3
//     })
// })

app.get('/products/:n' ,  function(req,res){
    // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
    // console.log(req.params)
    // console.log(req.params.n)
    if (req.parans.n > 10) {
        console.log("url로 전달받은 숫자가 10보다 크다.")
    }
    // 문자열과 숫자가 크게 다르지않게 작용한다.
    
    // 문자열을 숫자로 바꾸는 방법
    let number = parseInt(req.params.n) - 10
    console.log(number)

    res.json({
        num : req.params.n
    })
})

app.get('/:nickname', function(req,res){

    const param = req.params

    res.json({
        channel : param.nickname
    })
})

// 영상 클릭 주소 유튜브

app.get('/watch', function(req,res){
    // const q = req.query // q = {v:_,t:_}의 형식을 가진다
    // console.log(q.v)
    // console.log(q.t)

    const {v,t} = req.query
    console.log(v)
    console.log(t)
    
    res.json({
        video : q.v,
        timeline : q.t
    })
})

