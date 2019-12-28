const path = require('path');
//
//如果需要配置插件，需要在plugins中 进行配置，----在内存中生成页面，并将bundle.js注入进去
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },
    plugins: [//所有的第三方插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件
            filename: "index.html"//内存中的生成的文件名
        })
    ],
    module: { //第三方 loader 模块
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader'],//处理 css
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'], //处理less
            },
            {
                test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']//处理sass
            },
            {
                // limit >= 图片大小（byte） 可以转化为base64
                // limit <= 图片大小（byte） 不可以转化为base64 ，会修改图片的名字，hash  保证文件名唯一
                // name 可以使用name参数进行修改
                test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=1&name=[hash:8]-[name].[ext]'// 图片路径  处理url 可以传参，修改相关属性,
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/, use: 'url-loader'//处理字体的loader

            },
            {
                test: /\.js$/, use: 'babel-loader', exclude: /node_module/   //配置babel 处理高级的ES语法

            },
            {
                test: /\.vue$/, use: 'vue-loader'   //配置vue-loader

            },

        ]
    },
    resolve: {
        // alias: { //修改vue导入 import 包的路径 别名
        //     "vue$": "vue/dist/vue.js"
        // }
    }
};