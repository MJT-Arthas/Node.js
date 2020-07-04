const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
  console.log('中间件')
  let { token } = req.query
  if (token) {
    next()
  } else {
    res.send('no token')
  }
  next()
})

app.get('/test', (req, res) => {
  // let { token } = req.query
  // if (token) {
  res.send('ok11111')
  // } else {
  //   res.send('no11111')
  // }
})

app.get('/test2', (req, res) => {
  // let { token } = req.query
  // if (token) {
  res.send('ok')
  // } else {
  //   res.send('no')
  // }
})
app.listen(3000, () => {
  console.log('已启动')
})

// var debug = require('debug')('my-application'); // debug模块
// app.set('port', process.env.PORT || 3000); // 设定监听端口

// //启动监听
// var server = app.listen(app.get('port'), function () {
//   console.log('service run')
//   debug('Express server listening on port ' + server.address().port);
// });