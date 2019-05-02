const Crawler = require('crawler')
const fs = require('fs')

let studySpider = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
            return;
        }
        fs.writeFile("./data/month.json", res.body, {flag: "a"}, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("写入成功");
        })
    },
    jQuery: false,
})

// studySpider.queue('http://www.studyai.com/news/lazy/?page=1&limit=394&xtime=today')
// studySpider.queue('http://www.studyai.com/news/lazy/?page=1&limit=10&xtime=week')
studySpider.queue('http://www.studyai.com/news/lazy/?page=1&limit=2000&xtime=month')
