const fileSelect = require("fs");
const pdf = require("pdf-parse");
const crawler = require("crawler-request");

const ReportParse = async function() {
  await crawler(
    "http://www.am-one.co.jp/pdf/report/7377/200206_JSMarketDaily.pdf"
  ).then(response => {
    const comment = response.text;
    console.log(comment);
    const headerTitle = comment.split("）");
    const datestring = headerTitle[0].split("（");
    const SplitComment = comment.split("【為替】");
    const FXcomment = SplitComment[1].split("【リート・商品】");
    console.log(`${datestring[1]} FX:${FXcomment[0]}`);
    return FXcomment;
  });
};

console.log("Yop"); //test OUTPUT which works
module.exports = ReportParse;
