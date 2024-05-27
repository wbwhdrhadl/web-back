const express = require('express')
const app = express()
app.listen(1234)

// 데이터 세팅
let youtuber1 = {
    channelTitle : "십오야",
    sub : "595만명",
    videoNum : "993개"
} 

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "227만명",
    videoNum : "6.6개"
} 

let youtuber3 = {
    channelTitle : "테오",
    sub : "55만명",
    videoNum : "233개"
} 

let db = new Map()
db.set(1,youtuber1)
db.set(2,youtuber2)
db.set(3,youtuber3)


app.get('/youtuber/:id', function(res, req) {
    let {id} = req.params

    id = parseInt(id)

    const youtuber = db.get(id)

    if (youtuber == undefined) {
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    }

    else{
        res.json(youtuber)
    }
})

app.use(expres.json()) //http외 모듈인 미들웨어 json 설정
app.post('/youtuber', (req, res)=> {
    console.log(req.body)

    // map 에 저장을 해야함

    db.set(4, req.body)

    res.json({
        message: db.get(4).channelTitle+ "님 유튜버가 되신것을 축하드립니다" 
    })
})


