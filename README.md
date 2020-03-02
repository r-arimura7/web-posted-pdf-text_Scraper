## web-posted-pdf-text_Scraper("WebScraper") runs on Node.js and needs following packages;

## pdf-parse  
```
$ npm install -pdf-parse  
```
## crawler-request  
```
$ npm install -crawler-request
```
## Goal  
WebScraper obtains text information from web-posted-pdf.
In this particular use case, such text information is daily market commentary(Japanese language) on foreign exchnage currecy market posted on the website which is designated in the .js file. 

## How WebScraper supposed to work.  

Once executed, mktCommentScraper.js will call the module in ReportParse.js which crawls the web to get the text information and module.exports such text information to mktCommentScraper.js. Then mktCommentScraper will display the text information to console. 
