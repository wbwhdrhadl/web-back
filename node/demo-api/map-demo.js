const express = require('express')
const app = express()
app.listen(1234)
let db = new Map()

// app.get('/', function(req,res) {
//     let {id} = req.params
//     id = parseInt(id)
//     console.log(db.get(id))

//     if ( db.get(id) =- undefined ) {
//         res.json({
//             message: "없는 상품입니다."
//         })

//     } else { //else를 이용하는 것이 프로그램의 안정성을 더 높여준다.
//         res.json({
//             id : id,
//             productName : db.get(id)
//         })
//     }
// })

app.get('/', function(req,res) {
    let {id} = req.params
    id = parseInt(id)

    res.json(db.get(id))

    if(db.get(id) == undefined) {
        res.json({
            message: "error"
        })
    } else {
        product = db.get(id)
        product.id = id  //객체에 새로운 변수를 추가하는 방법
        // product["id"] = id
        res.json(product)
    }
})

// loacalhost:1234/1 -> NoteBook
// localhost:1234/2 -> Cup
// localhost:1234/3 -> Chair


let notebook = {
    productName : "Notebook",
    price : 2000
}

let cup = {
    productName : "cup",
    price : 20
}

let chair = {
    productName : "chair",
    price : 200
}
let poster = {
    productName : "poster",
    price : 150
}
// db.set(1, "NoteBook")
// db.set(2, "cup")
// db.set(3, "chair")
// db.set(4, "Poster")
// 숫자열과 문자열을 구별한다.

db.set(1, notebook)
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))
