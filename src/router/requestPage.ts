const request = require('request');
const cheerio = require('cheerio');

// 


var header = {
  'Connection': 'keep-alive',
  'content-type': 'application/json',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 wechatdevtools/1.05.2204250 MicroMessenger/8.0.5 Language/zh_CN webview/',
}


// node http request https://www.amazon.co.uk/dp/B07BFW53WH?th=1
const requestPage = (page: string) => {
  request({
    url: page,
    method: 'GET',
    headers: header,
  }, (error: any, response: any, body: any) => {
    if(error) {
      console.log(error);
    }     
    const $ = cheerio.load(body);
    const container = $('body > #a-page > #dp > .a-container > span[data-hook="rating-out-of-text"]').html();

    console.log('container',container);
    
    // data.each((index: any, element: any) => {
    //   console.log('element',element);
    // })
    
  })
}


export default {
  requestPage,
};
