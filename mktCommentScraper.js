//@ts-check

const reportFileName = "test";
const ReportParse = require("./ReportParse");
const TestResults = require("./TestFile");
//const url = "http://www.am-one.co.jp/pdf/report/7377/200206_JSMarketDaily.pdf"; commented out for future inculusion of url argument in "results" function

const main = () => {
  const results = () => {
    ReportParse();
  };
};
console.log(ReportParse);
main();
