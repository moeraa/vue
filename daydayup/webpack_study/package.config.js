const path = require('path');
const webpack = require('webpack');//启动热部署的第二步
const htmlWebpackPlugin = require('html-webpack-plugin');//导入 html-webpack-plugin插件
//配置文件就是一个js文件，通过Node中的模块操作，向外暴露一个配置对象。
module.exports = {
    entry: path.join(__dirname, './src/index.js'),//入口,要使用webpack打包那个文件。
    output: {//输出文件的配置
        path: path.join(__dirname, './dist'),//指定到那个目录中去
        filename: "bundle.js"//指定输出文件的名称
    },
    //webpack-dev-server 的第二种配置方式
    // --open --port 3000 --contentBase src
    devServer: {
        open: true,//启动打开浏览器
        port: 3000,//指定端口
        contentBase: 'src',//指定浏览器启动的目录
        hot: true,//启动热部署的第一步
        //
    },
    //配置插件阶段
    plugins: [
        new webpack.HotModuleReplacementPlugin(),// new 热更新插件的对象，热部署启动
        new htmlWebpackPlugin({//创建这个插件
            //指定模板页面，将来会根据这个指定的页面去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'//指定生成的页面的名称
        })
    ],
    module: {// 所有的第三方插件的加载器---从右到左
        rules: [
            {
                test: /\.css$/,//正则匹配
                use: ['style-loader', 'css-loader']//匹配成功的使用两个第三方插件 css
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']//匹配成功的使用两个第三方插件 less
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']//匹配成功的使用两个第三方插件 scss
            }
        ]
    }

};
