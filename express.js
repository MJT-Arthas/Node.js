const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))//使用中间件 
//解析表单数据
app.use(bodyParser.json())
//解析json
app.get('/user/login', (req, res) => {
  console.log('hello')
  console.log(req.query)

  let { us, ps } = req.query
  if (us === 'mjt' && ps == 123) {
    res.send({ err: 0, msg: '登录成功' })
  } else {
    res.send({ err: -1, msg: 'user password false ' })
  }

})

app.post('/user/reg',(req,res)=>{
  console.log(req.body)
  let { us, ps } = req.body
  console.log(req.body)
  // if (us === 'mjt' && ps == 123) {
  //   res.send({ err: 0, msg: '登录成功' })
  // } else {
  //   res.send({ err: -1, msg: 'user password false ' })
  // }
})

app.listen(3000, () => {
  console.log('serve start')
})