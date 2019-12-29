//需求：封装一个方法，给定一个文件路径，使用方法读取文件，然后将内容返回

const fs = require('fs');
const path = require('path');


//这是普通读取文件方式
/*fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})*/

//初衷：给定文件路径，返回的读取到的内容

console.log(path.join(__dirname, './files/1.txt'));

// /Users/moer/Documents/code/a_vue/vue_study/codes-promise/files/1.txt
// 可以规定 callback中有两个参数，第一个参数是失败的结果，第二个结果是成功的结果
// 同时 规定如果成功后，返回的结果应该位于callback中 第二个参数，此时第一个参数 放一个null，
//     规定如果失败后，返回的结果应该位置callback中 第一个参数，是一个ERROR对象，此时第二个参数 放一个undefined
function getFileByPath(fpath, callback) {
    fs.readFile(fpath, 'utf-8', (err, data) => {
        //如果报错，进入if分之后，if后面的代码就没有必要执行了
        if (err) {
            return callback(err)
        }
        /*console.log(data);
        return data;
        异步读取文件的方法 返回结果为 undefined
        */
        callback(null, data)
    })
}

getFileByPath(path.join(__dirname, './files/1.txt'), (error, data) => {
    if (error) {
        return console.log(error.message)
    } else {
        console.log(data);
    }
});


