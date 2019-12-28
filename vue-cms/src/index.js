//入口文件
console.log('ok');
import Vue from 'vue';

//导入 Vue router
import  VueRouter from 'vue-router'
//使用VueRouter
Vue.use(VueRouter);
import router  from './router.js';

//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

//导入Mui的样式
import './../lib/mui/dist/css/mui.min.css'
import './../lib/mui/dist/css/icons-extra.css'
//导入Mint-ui 组件
import {Header, Swipe, SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入app 根组件
import app from "./app.vue";

var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(app),//注册组件
    router  //挂在路由对象

});