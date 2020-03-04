const fileSelect = require("fs");
const pdf = require("pdf-parse");
const crawler = require("crawler-request");

function reportParse(url) {
  return new Promise(resolve => {
    crawler(url).then(response => {
      const comment = response.text;
      const headerTitle = comment.split("）");
      const datestring = headerTitle[0].split("（");
      const SplitComment = comment.split("【為替】");
      const FXcomment = SplitComment[1].split("【リート・商品】");
      const result = datestring[1].toString() + FXcomment[0].toString();
      resolve(result);
    });
  });
}

module.exports.getFXComment = async function(url) {
  const FXcomment = await reportParse(url);
  return FXcomment;
};
