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
In this particular use case, such text information is daily market commentary (Japanese language) of foreign exchnage currency market posted on the website in a pdf format. Website is designated in the .js file.  
The website is currently static for the sake of project being in early stage but will be dynamic in future as project advances.  

## How WebScraper supposed to work
Once executed, mktCommentScraper.js will call the module in ReportParse.js which crawls the web to get the text information and module.exports such text information to mktCommentScraper.js. Then mktCommentScraper will display the text information to console. 
