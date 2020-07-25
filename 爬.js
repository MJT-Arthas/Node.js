const https = require('https')
const http = require('http')
const cheerio = require('cheerio')
const fs = require('fs')

let url = 'https://selfreport.shu.edu.cn/DayReport.aspx'
https.get(url, (res) => {
  let error;
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  if (statusCode !== 200) {
    error = new Error('请求状态错误\n' +
      `状态码: ${statusCode}`);
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error('请求类型错误\n' +
      `接受的类型为 ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }
  let rawData = ''
  res.on('data', (chunk) => {
    // console.log(chunk.toString('utf8'))
    rawData += chunk.toString('utf8')
  })
  res.on('end', () => {
    let $ = cheerio.load(rawData)
    $('img').each((i, e) => {
      console.log($(e).attr('src'))
    })
    // fs.writeFileSync('./mjt.html',rawData)
    console.log('数据传输完毕')
  })
}).on('error', (err) => {
  console.log(`请求错误${err}`)
})
