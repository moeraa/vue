//入口文件
console.log('ok');
import Vue from 'vue';

//导入Mui的样式
import './../lib/mui/dist/css/mui.min.css'
//导入Mint-ui 组件
import {Header} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);

// 导入app 根组件
import app from "./app/app.vue";

var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(app)//注册组件

});