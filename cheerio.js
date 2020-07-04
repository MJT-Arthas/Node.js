const cheerio = require('cheerio')
let $ =cheerio.load('<div><p>你好</p><img src="www.baidu.com"</div>')

console.log($('img').attr('src'))