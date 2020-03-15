//@ts-check
const request = require("request-promise");
const C$ = require("cheerio");
const url = "http://www.am-one.co.jp/report/marketreport/daily.html";
const NewPostUrlSelector =
  "body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(2) > td.icon-new > a";
const toprowUrlSelctor =
  "body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(2) > a";

function GetReportUrl() {
  return new Promise(async function(resolve) {
    const result = await request.get(url);
    const $ = C$.load(result);
    // const targetUrlSelector = result => {
    //   if (
    //     !/body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(2) > td.icon-new > a/.test(
    //       result
    //     )
    //   ) {
    //     return toprowUrlSelctor;
    //   } else {
    //     return NewPostUrlSelector;
    //   }
    // };
    $(toprowUrlSelctor).each((index, element) => {
      const link = [$(element).attr("href")];
      for (var i = 3; i < 7; i++) {
        const elementString =
          "body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(" +
          i +
          ") > td:nth-child(2) > a";
        $(elementString).each((index, element) => {
          link.push($(element).attr("href"));
        });
        resolve(link);
      }
    });
  });
}

module.exports.getReportUrl = () => {
  const result = GetReportUrl();
  return result;
};

// body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(3) > td:nth-child(2) > a
// body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(4) > td:nth-child(2) > a
// body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(5) > td:nth-child(2) > a
// body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(6) > td:nth-child(2) > a
//body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(2) > td.icon-new > a
//body > div.box-report.daily-report.container.clearfix > div.container-right > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(2) > a
