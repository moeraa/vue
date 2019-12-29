//1. promise 是一个构造函数， 可以使用new Promise() 得到一个实例
//2. 在promise上 有两个函数，分别是resolve（成功之后的回调函数） and reject 失败之后的回调函数）
//3. 在promise构造函数的Prototype属性上，有个.then()的方法，也就是实例创建成功后，都可以当问到.then()方法
//4. promise 表示一个异步操作，每当我们new 一个promise实例，这个实例就表示异步操作一个具体
//5. 既然是promise是创建的实例，是一个异步操作，这个异步擦耦走的结果有两种状态：
//5.1 状态1：异步执行成功， 需要内部调用成功的回调函数 resovle() 将结果返回给调用者
//5.2 状态2：异步执行失败， 需要内部调用失败的回调函数，reject() 将结果返回给调用者
//5.3 由于promise的实例，是一个异步操作，所以 内部拿到操作结果后，无法使用return把操作的记过放回给调用者，这时候，就只能使用
//回调函数的形式，，来显示成功或者失败的结果，返回给调用这
//6. 我们可以在new 出来的promise 实例上，调用.then()方法，【预先】 为这个promise异步操作指定成功和失败的回调函数

//注意：这个new 出来的promise 只是代表【形式上】的异步操作
// 就是说：只知道它是一个异步操作，做什么事情，未知。
// var promise = new Promise();


/*
//这是一个具体的异步操作，其中使用function 指定一个具体的异步操作
var promise = new Promise(function () {
    //这个funcation 内部写的就是具体的异步操作，
});*/

const fs = require('fs');
const path = require('path');

/*
//new Promise 除了能够得到一个实例之外，还会调用promise 构造函数中的function 执行这个function中的代码
var promise = new Promise(function () {
    fs.readFile(path.join(__dirname, './files/1.txt'), "utf-8", ((err, data) => {
        if (err) throw  err;
        console.log(data)
    }))
});*/

//初衷：给定路径，读取文件内容
function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, "utf-8", ((err, data) => {
            if (err) {
                return reject(err)
            } else {
                resolve(data)
            }
        }))
    });
}

/*// 下面是个错误的示范
//var fPath = path.join(__dirname, './files/1.txt');
//通过then 指定的回调函数时成功的回调，必须传 失败的回调可以省略
////先读取文件1 然后读取文件2 。。。
getFileByPath(path.join(__dirname, './files/1.txt')).then(function (data) {
    console.log("success:" + data);
    getFileByPath(path.join(__dirname, './files/2.txt')).then(function (data) {
        console.log("success:" + data);
        getFileByPath(path.join(__dirname, './files/3.txt')).then(function (data) {
            console.log("success:" + data)
        })
    })
});*/
//正确示范   上一个文件的then()中 返回一个新的promise 可以继续使用.then来处理
//如果前面的执行失败，如果不想影响后续的promise操作，可以为每个promise提供一个失败回调
/*getFileByPath(path.join(__dirname, './files/71.txt'))
    .then(function (data) {
        console.log("success:" + data);
        //读取文件2
        return getFileByPath(path.join(__dirname, './files/2.txt'))
    }, function (err) {
        console.log("error----" + err.message)
        return getFileByPath(path.join(__dirname, './files/2.txt'))
    })
    .then(function (data) {
        console.log("success:" + data);
        //读取文件3
        return getFileByPath(path.join(__dirname, './files/3.txt'))
            .then(function (data) {
                console.log("success:" + data);
            })
    });
console.log('kkkkkkk-----')*/


//需求：哪怕前面的promise 执行失败，但是不要影响后续的promise的正常执行，此时我们可以单独为每个promise，通过，.then指定一个失败回调

//有时候，有这样的需求，与上面的需求相反，：如果后续的promise执行，依赖前面的promise的执行结果，如果前面失败来，则后面就没有继续的执行的意义来
//此时想要实现得是一旦有报错，立即终止所有的promise的执行;


getFileByPath(path.join(__dirname, './files/1.txt'))
    .then(function (data) {
        console.log("success:" + data);
        //读取文件2
        return getFileByPath(path.join(__dirname, './files/33.txt'))
    },)
    .then(function (data) {
        console.log("success:" + data);
        //读取文件3
        return getFileByPath(path.join(__dirname, './files/3.txt'))
            .then(function (data) {
                console.log("success:" + data);
            })
    }).catch(function (err) {//如果前面有一个promise执行很失败很失败，则会立即终止所有promise的操作，并马上进入catch中 处理promise抛出的异常
    console.log("error catch message :" + err.message)
});
console.log('kkkkkkk-----');