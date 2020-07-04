const express = require('express')
const db = require('./db/connect')
const app = express()

const userRouter = require('./router/userRouter')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))//使用中间件 
//解析表单数据
app.use(bodyParser.json())

app.use('/user',userRouter)
// app.get('/', (req, res) => {
//   res.send({ err: 0, msg: '你好' })
// })

app.listen(3000,()=>{
  console.log('已启动')
})
