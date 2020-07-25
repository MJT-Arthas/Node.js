var axios = require('axios')
var Cookies = {};
const A = function () {
  axios({
    url: 'https://newsso.shu.edu.cn/login',
    method: 'POST',
    data:
      `username=18722898&password=Tt19960227&login_submit=%E7%99%BB%E5%BD%95%2FLogin`,
    path: '/login',
    scheme: 'https',
    authority: 'newsso.shu.edu.cn',
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'cache-control': 'max-age=0',
      'content-length': '77',
      'content-type': 'application/x-www-form-urlencoded',
      'origin': 'https://newsso.shu.edu.cn',
      'referer': 'https://newsso.shu.edu.cn/login',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edg/83.0.478.58'
    }
  })
    .then((res) => {

      const { statusCode } = res;
      console.log(statusCode);
    })
    .catch((err) => {
      console.log(err)
    })
}
A()
console.log(Cookies)