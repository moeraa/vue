console.log("ok");

// import Vue from  './../node_modules/vue/dist/vue.js'
import Vue from 'vue'
//在项目根目录下是否存在 node_modules 文件夹
//在node_modules中根据包名 找到vue的文件夹
//在vue文件夹中 寻找一个package.json 的文件
// 在package.json中 找到 main属性【main属性是指定这个包 加载的入口】

//传统的
// var login = {
//     template:"<h1>this is customs componet</h1>"
// };

//引入 vue 组件文件
import login from './index/login.vue'
//1.默认webpack 无法打包.vue 文件
//2.安装 vue-loader ：npm i vue-loader vue-template-compiler -D
//3.新增一个 loader 配置项： {test:/\.vue$/,use:'vue-loader'}

var vm = new Vue({
    el: "#app",
    data: {
        msg: "123",
    },
    // render: function (createElement) {
    //     return createElement(login)
    // }
    render:c=>c(login)

});

import m1,{chen,age as agesss} from './test.js'

console.log(m1.name+ "  "+ m1.age);
console.log(chen +" age "+ agesss)
