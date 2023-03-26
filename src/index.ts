// import routers from './router'
import { time, timeEnd } from "console";
import requestPage from "./router/requestPage";

const main = async () => {
  // 这里只是一个 pb 的使用示例，不包含任何功能

  //   const url = "https://www.amazon.co.uk/dp/B07BFW53WH";
  const url = `https://www.amazon.co.uk/dp/B07BFW53WH
      https://www.amazon.co.uk/dp/B07RTXY8RB
      https://www.amazon.co.uk/dp/B07RQLPYPV
      https://www.amazon.co.uk/dp/B07RRVYGJW
      https://www.amazon.co.uk/dp/B07TYNQ1DG
      https://www.amazon.co.uk/dp/B07RXRBRCD
      https://www.amazon.co.uk/dp/B07TWM75R4
      https://www.amazon.co.uk/dp/B07TVJC5KR
      https://www.amazon.co.uk/dp/B07VBY3KSV`;
  const urlData = url.split(/\s+/);

  const array: any[] = [];
  var num: number = 0,
    total: number = urlData.length;
  console.log("开始执行.......");
  time("执行时间");
  for (const url of urlData) {
    num++;
    const data = await requestPage(url, num, total);
    const newData = data.replace(" out of 5 stars", "");
    array.push({ url, data: newData });
  }
  timeEnd("执行时间");
  console.log(array);
};
main();
// requestPage.requestPage('https://www.amazon.co.uk/dp/B07BFW53WH?th=1')
