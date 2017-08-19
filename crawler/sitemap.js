var sm = require('sitemap')
    , fs = require('fs');

    var sitemap = sm.createSitemap({
          urls: [{
            url: 'http://test.com/page-1/',
            video: [
              { thumbnail_loc: 'http://test.com/tmbn1.jpg', title: 'A video title', description: 'This is a video' },
              { thumbnail_loc: 'http://test.com/tmbn2.jpg', title: 'Another video title', description: 'This is another video' },
            ]
          }]
        });
        
fs.writeFileSync("./sitemap.xml", sitemap.toString());
