//@ts-check
const ReportParse = require("./ReportParse");
const url = "http://www.am-one.co.jp/pdf/report/7573/200304_JSMarketDaily.pdf";
//"http://www.am-one.co.jp/pdf/report/7377/200206_JSMarketDaily.pdf";

const main = async () => {
  const results = await ReportParse.getFXComment(url);
  console.log(results);
};

main();
