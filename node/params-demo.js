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
