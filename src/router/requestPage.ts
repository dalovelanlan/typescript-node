const request = require("request");
const cheerio = require("cheerio");
import ProgressBar from "../utils/ProgressBar";

// 配置头部
var header = {
  Connection: "keep-alive",
  "content-type": "application/json",
  Accept: "*/*",
  "Sec-Fetch-Site": "cross-site",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty",
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 wechatdevtools/1.05.2204250 MicroMessenger/8.0.5 Language/zh_CN webview/",
};

// node http request
const requestPage = (page: string, number?: number, total?: number) => {
  const pb = new ProgressBar("执行进度", 50);
  return new Promise<string>((resolve, reject) => {
    request(
      {
        url: page,
        method: "GET",
        headers: header,
      },
      (error: any, response: any, body: any) => {
        if (error) {
          console.log(error);
        }
        const $ = cheerio.load(body);
        const data = $(
          "body > #a-page > #dp > .a-container > #ppd > #productTitleGroupAnchor > #titleExpander >#productTitleExpanderRow >.a-fixed-right-grid-inner >#averageCustomerReviews_feature_div   > #acrCustomerReviewLink > i > span"
        ).html();
        if (number <= total) {
          // 更新进度条
          pb.render({ completed: number, total: total });
        }
        if (data) {
          resolve(data);
        } else {
          resolve("0");
        }
      }
    );
  });
};

export default requestPage;
