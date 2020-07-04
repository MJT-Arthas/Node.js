const express = require('express')
const app =express()

let userRouter= require('./userRouter')
let foodRouter= require('./foodRouter')
app.use('/user',userRouter)
app.use('/food',foodRouter)


app.listen(3000,()=>{
  console.log('已启动')
})
