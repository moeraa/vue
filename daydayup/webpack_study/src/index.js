import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'blue');
    $('li:even').css('backgroundColor', 'lightpink');
});

//webpack
//1.webpack  能够处理JS文件的相互依赖关系
//2.webpack  能够处理JS文件的兼容性问题
