//@ts-check
const FxReportParse = require("./FxReportParse");
const EqReportParse = require("./EquityReportParse");
const FIReportParse = require("./FIReportParse");
const TableCrawler = require("./TableCrawler");
const urlPartial = "http://www.am-one.co.jp";

const main = async () => {
  const urlTail = await TableCrawler.getReportUrl();
  for (var i = 0; i < 5; i++) {
    const url = urlPartial + urlTail[i];
    const FxComment = await FxReportParse.getFXComment(url);
    const EquityComment = await EqReportParse.getEquityComment(url);
    const FIComment = await FIReportParse.getFIcomment(url);
    console.log(url);
    console.log(FxComment);
    console.log(EquityComment);
    console.log(FIComment);
  }
};

main();
