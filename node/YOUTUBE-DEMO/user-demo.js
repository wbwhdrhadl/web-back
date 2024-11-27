//exporess 모듈 세팅

const express = require('express')
const app = express()

app.listen(7777)

let db = new Map()
var id = 1 // 하나의 객체를 유니크하게 구별하기 위함(primary key)

// 로그인
app.use(express.json()) // http 외 모듈 'json'

app.post('/login', function(req, res) {
    console.log(req.body) // id, pwd

    // userId가 디비에 저장된 회원인지 확인
    const {userId, password} = req.body
    var hasUserId = false
    db.forEach(function(user,id) {
        if(user.userId === userId) {
            console.log('같은 거 찾았다!')
            hasUserId = true

            if (user.password === password) {
                console.log("패스워드도 같다!")
            }
            else {
                console.log("패스워드는 틀렸다!")
            }
        }
    })

    if(!hasUserId) {
        console.log(" 입력하신 아이디는 없는 아디이 입니다. ")
    }
})


// 회원가입
app.post('/join', function(req, res) {
    console.log(req.body)


    if (req.body == {}){
        res.status(400).json({
            message : `입력값을 다시 확인해 주세요.`
        })
    }
    else{
        db.set(id++, req.body)
        res.status(201).json({
            message : `${db.get(id-1).name}님 환영합니다.`
        })
    }


})

// app
//     .route('/users/:id')
//     .get(function(req, res) {
//         let {id} = req.params
//         id = parseInt(id)
    
//         const user = db.get(id)
//         if (user == undefined) {
//             res.status(404).json({
//                 message: "회원 정보가 없습니다"
//             })
//         }
//         else {
//             res.status(200).json({
//                 userId : user.userId,
//                 name : user.name
//             })
//         }
//     })

//     .delete(function(req, res) {
//         let {id} = req.params
//         id = parseInt(id)

//         const user = db.get(id)
//         if (user == undefined) {
//             res.status(404).json({
//                 message: "회원 정보가 없습니다"
//             })
//         }
//         else {
//             db.delete(id)
//             res.status(200).json({
//                 message : `${user.name}님 다음에 또 뵙겠습니다.`
//             })
//         }
//     })

// // 회원 개별 조회
// app.get('/users/:id', function(req, res) {
//     let {id} = req.params
//     id = parseInt(id)

//     const user = db.get(id)
//     if (user == undefined) {
//         res.status(404).json({
//             message: "회원 정보가 없습니다"
//         })
//     }
//     else {
//         res.status(200).json({
//             userId : user.userId,
//             name : user.name
//         })
//     }
// })


// 회원 개별 탈퇴
app.delete('/users/:id', function(req, res) {
    let {id} = req.params
    id = parseInt(id)

    const user = db.get(id)
    if (user == undefined) {
        res.status(404).json({
            message: "회원 정보가 없습니다"
        })
    }
    else {
        db.delete(id)
        res.status(200).json({
            message : `${user.name}님 다음에 또 뵙겠습니다.`
        })
    }
})
