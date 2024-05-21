const express = require('express')
const app = express()

app.listen(1234)

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

app.get('/:nickname', function(req,res){

    const {nickname} = req.params
    
    if (nickname == "@15ya.fullmoon"){
        res.json(youtuber1)
    } 
    else if (nickname == "@chimchackman_official"){
        res.json(youtuber2)
    }
    else if (nickname == "@Teo_universe") {
        res.json(youtuber3)
    }
    else {
        res.json({
            message : "저희가 모르는 유튜버 입니다."
        }
        )
    }

})

