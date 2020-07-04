const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
const mail = require('../utils/mail')
let codes = {}
let count = 0
let ctime
//发送邮件验证码
router.post('/getMailCode', (req, res) => {
  if (count == 0) {
    ctime = new Date().getTime()//毫秒数
  }
  let nowTime = new Date().getTime()
  
  count += 1
  if ((nowTime - ctime) > 300000) {
    count = 0
  }
  if (count > 3) {
    res.send({ err: -5, msg: '五分钟内不得重复发送超过三次' })
    return
  }
  let { inputMail } = req.body
  let code = parseInt(Math.random() * 10000)
  mail.sendMail(inputMail, code)
    .then(() => {
      codes[inputMail] = {code}
      console.log(codes)


      res.send({ err: 0, msg: '邮件发送成功' })

    })
    .catch((err) => {
      console.log(err)
      res.send({ err: -1, msg: '邮件发送失败' })
    })
})

router.post('/reg', (req, res) => {
  let { us, ps, code } = req.body
  if (!(us && ps && code)) {
    return res.send({ err: -1, msg: '参数错误' })
  } else {
    console.log(codes[us])
    console.log(code)
    console.log(codes)
    if (codes[us].code != code) { return res.send({ err: -4, msg: '验证码错误' }) }

    User.find({ us })
      .then((data) => {
        if (data.length == 0) {
          return User.insertMany({ us: us, ps: ps })
            .then(() => {
              res.send({ err: 0, msg: '注册成功' })
            })
        } else {
          res.send({ err: -3, msg: '用户名已经存在' })
        }
      })
      .catch(() => {
        res.send({ err: -2, msg: '注册失败' })
      })
  }
})

router.post('/login', (req, res) => {
  let { us, ps } = req.body
  if (!(us && ps)) {
    return res.send({ err: -1, msg: '参数错误' })
  } else {
    User.find({ us: us, ps: ps })
      .then((data) => {
        if (data.length > 0) {
          res.send({ err: 0, msg: '登录成功' })
        } else {
          res.send({ err: 0, msg: '用户名或密码不正确' })
        }
      })
      .catch((err) => {
        res.send({ err: -2, msg: '内部错误' })
      })
  }
})

module.exports = router