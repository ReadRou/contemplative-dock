const Crawler = require('crawler')
const fs = require('fs')

exports.queue = (url, filename) => {
    new Crawler({
        maxConnections: 10,
        // This will be called for each crawled page
        callback: function (error, res, done) {
            if (error) return console.error(error);
            fs.writeFile(`../server/app/data/${filename}.json`, res.body, {
                flag: "a"
            }, function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("写入成功");
            })
        },
        jQuery: false,
    }).queue(url)
}