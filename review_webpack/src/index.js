import './css/index.css'
// import './css/index1.less'
import './css/index2.scss'

//注意 如果要是以路径的形式，访问node——module下的文件，可以省略 路径前的node_module 这一级的目录
//默认就是在node_module下去寻找
import 'bootstrap/dist/css/bootstrap.css'

//class 是 ES6中 面向对象的关键字
class Person {
    //static 关键字 是用来定义静态属性
    //静态属性 是直接可以通过类名可以直接使用的属性
    // 对立的属性：实例属性，只能通过对象的实例来访问
    static info = {name: 'zs', age: 18}
}

var zs1 = new Person();

//如果没有class 原来的 获取对象的方式 是创建一个构造函数
function Animal(name) {
    this.name = name
}

Animal.info = 'this is static field';
//访问 静态属性上的info
//在webpack中默认只能处理一部分ES6语法，一些高级的是处理不了，需要第三方loader去处理，然后由webpack出打包到bundle.js中
//通过 Babel 可以将高级的语法转发为低级的语法
//第一步：装loader
    //  在webpack中 可以运行一下命令 安装两个包 去安装Babel
    //第一套：npm i babel-core babel-loader babel-plugin-transform-runtime -D
    //第二套：npm i babel-preset-env babel-preset-stage-0 -D
// 第二步：配置 webpack.conf.js
    //打开配置文件  在module总的rules 添加新的匹配规则：{test:/\.js$/,use:['babel-loader'],exclude:/node_module/ }
    //必须要排除node_module
    //原因：1。webpack 会将node_module 中所有的文件都打包到bundle.js中， 这样效率很差， 并且会很慢，
    //     2。就打包成功了，也不会运行不起来
//第三步：在项目的根目录下创建 '.babelrc' 文件，该文件时babel的配置文件，该文件必须要复合json格式的规范：不能写注释，字符串必须要是使用双引号等
    //需要在配置文件 .babelrc 文件中，添加如下配置： presets (翻译：语法)
// {
//     "presets":["env"，""stage-0],
//     "plugins":["transform-runtime"]
// }
console.log(Animal.info);
/*var zs = new Animal('zs');
//this is static field
console.log(Animal.info);
//this is （instance）实例 field
console.log(zs.name);*/
