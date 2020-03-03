//@ts-check
const ReportParse = require("./ReportParse");

//const url = "http://www.am-one.co.jp/pdf/report/7377/200206_JSMarketDaily.pdf"; commented out for future inculusion of url argument in "results" function

const main = async () => {
  const results = await ReportParse();
  console.log(results);
};

main();
