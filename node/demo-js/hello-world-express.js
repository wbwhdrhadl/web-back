const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.use(express.json())
app.post('/test', function(req, res) {
    // res.send('Hello POST!!')
    // body에 숨겨진 데이터를 화면에 뿌리기
    res.send('req.body.message')
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})