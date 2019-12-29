//入口文件
console.log('ok');
import Vue from 'vue';

//导入 Vue router
import  VueRouter from 'vue-router'
//使用VueRouter
Vue.use(VueRouter);
import router  from './router.js';


//导入格式化时间插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dataFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});

//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

//导入Mui的样式
import './../lib/mui/dist/css/mui.min.css'
import './../lib/mui/dist/css/icons-extra.css'
//导入Mint-ui 组件
import {Header, Swipe, SwipeItem,Button} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 导入app 根组件
import app from "./app.vue";

var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(app),//注册组件
    router  //挂在路由对象

});