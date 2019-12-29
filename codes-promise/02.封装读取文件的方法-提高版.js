//需求：封装一个方法，给定一个文件路径，使用方法读取文件，然后将内容返回

const fs = require('fs');
const path = require('path');


console.log(path.join(__dirname, './files/1.txt'));

//放置两个callback
function getFileByPath(fpath, succCb, errCb) {
    fs.readFile(fpath, 'utf-8', (err, data) => {
        if (err) {
            return errCb(err)
        } else {
            succCb(data)
        }
    })
}

// getFileByPath(path.join(__dirname, './files/1.txt'), function (data) {
//
//     console.log( "success ----callback:"+data)
// }, function (error) {
//     console.log("error ----- callback :" + error.message)
//
// });


//需求 ：先读取文件1 在读取文件2 最后读取文件3
//回调嵌套----回调地狱
//可以使用 ES6中的Promise 来解决回调地狱的问题
//问： promise 出来的本质是？
//答：单纯为了解决回调地狱的问题，并不能减少代码量
getFileByPath(path.join(__dirname, './files/1.txt'), function (data) {
    console.log("1:" + data);
    getFileByPath(path.join(__dirname, './files/2.txt'), function (data) {
        console.log("2:" + data);
        getFileByPath(path.join(__dirname, './files/3.txt'), function (data) {
            console.log('3:' + data)
        });
    });
});

