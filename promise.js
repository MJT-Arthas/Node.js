const fs = require('fs')
const { resolve } = require('path')
const { rejects } = require('assert')

// fs.stat('./he.js',(err,status)=>{
//   if(err){
//     console.log('文件不存在')
//   }else{
//     fs.unlink('./he.js',(err)=>{
//       console.log(err)
//     })
//   }
// })

function isFile() {
  return new Promise((resolve, rejects) => {
    fs.stat('./he.js', (err, status) => {
      if (err) {
        rejects("文件不存在")
      } else {
        resolve('文件存在')
      }
    })
  })
}

function deleteFile() {
  return new Promise((resolve, rejects) => {
    //异步操作
    fs.unlink('./he.js', (err) => {
      if (err) {
        rejects("删除失败了")
      } else {
        resolve('删除成功了')
      }
    })
  })
}
isFile()
  .then((msg) => {
    console.log(`then:${msg}`)
  })
  .then(() => {
    return deleteFile()
  })
  .then((msg)=>{
    console.log(`then:${msg}`)
    console.log('删除成功')
  })
  .catch((err) => {
    console.log(`catch:${err}`)
  })
console.log(22)