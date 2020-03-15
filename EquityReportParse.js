const fileSelect = require("fs");
const pdf = require("pdf-parse");
const crawler = require("crawler-request");

function reportParse(url) {
  return new Promise(function(resolve, reject) {
    crawler(url).then(function(response) {
      const UnextractableComment = response.text;
      if (!/【株式】/.test(UnextractableComment)) {
        // The case when mktcommetary text data being not extracable due to the nature of original file foramt.
        const headerTitle = UnextractableComment.split("）");
        const datestring = headerTitle[0].split("（");
        const ErrorComment = datestring[1].toString() + ":" + "error";
        resolve(ErrorComment);
      } else {
        const comment = response.text;
        const headerTitle = comment.split("）");
        const datestring = headerTitle[0].split("（");
        const SplitComment = comment.split("【株式】");
        const FXcomment = SplitComment[1].split("【債券】");
        const result = datestring[1].toString() + ":" + FXcomment[0].toString();
        resolve(result);
      }
    });
  });
}

module.exports.getEquityComment = async function(url) {
  const FXcomment = await reportParse(url);
  return FXcomment;
};
