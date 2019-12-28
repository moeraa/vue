import $ from 'jquery'
//使用import 语法 导入样式

//webpack 默认只能打包js文件，不能处理css这种文件
//如果需要处理这种 非JS 文件，需要手动安装第三方 loader 加载器
import './css/index.css'
import './css/index1.less'
import './css/index2.scss'
$(function () {
    $('li:odd').css('backgroundColor', 'lightgreen');
    $('li:even').css('backgroundColor', 'lightpink');
});

//webpack
//1.webpack  能够处理JS文件的相互依赖关系
//2.webpack  能够处理JS文件的兼容性问题
