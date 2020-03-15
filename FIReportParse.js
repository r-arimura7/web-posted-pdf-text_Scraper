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
        const SplitComment = comment.split("【債券】");
        const FIcomment = SplitComment[1].split("【為替】");
        const result = datestring[1].toString() + ":" + FIcomment[0].toString();
        resolve(result);
      }
    });
  });
}

module.exports.getFIcomment = async function(url) {
  const FIcomment = await reportParse(url);
  return FIcomment;
};
