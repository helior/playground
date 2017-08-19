var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            $('a').each(function() {
              var href = $(this).attr('href');
              console.log(href);
            });
            console.log($("a").attr('href'));
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('https://nbc.com');
