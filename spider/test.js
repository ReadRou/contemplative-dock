const fs = require('fs')

fs.writeFile("./data/11.txt", "我是要写入的11.txt文件的内容", {flag: "a"}, function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log("写入成功");
    }
})
