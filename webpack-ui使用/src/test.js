//在ES6中 也通过一定的规范 来规定 ES6中 如何导入和导出：导入模块 import 模块名称 from 包名   导入样式 import '样式标示'
//在 ES6 中 使用export default和 export 向外暴露成员
//如果使用 export default ：向外 暴露成员 使用任何变量都可以使用
//注意 ：一个模块中 只能向外暴露一个 export defult

// export default {
//     name:"l4",
//     age:44
// }
var info = {
    name: "zs1",
    age: 12
};
export default info

//使用 export 这种方式 导出 使用时需要使用花括号来 接收 --【按需接收】
//使用 export 导出的成员 可以向外暴露多个成员，必须按照{名称}来接收,
//使用 export 导出的成员，如果一定修改变量名 可以起别名 {age as age111}
export var chen = "moer";
export var age = "12";

//这是 node 中向外暴露成员的形式    export default ={}
//在node中 使用 var 名称 = requires('模块标识符')
//module_exports 和 exports 来向外 暴露成员
