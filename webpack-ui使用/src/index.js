import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);
import app from './index/app.vue'
//自定义导入路由
import router from './router.js'
//所有的组件都导入来
//导入Mint-UI
// import MintUI from 'mint-ui'
// //这里可以省略 node_module 目录
// import 'mint-ui/lib/style.css'
// //使用mint-ui ，将所有的组件，注册为全局的组件
// Vue.use(MintUI);
//按需导入
import { Button, Cell } from 'mint-ui'
Vue.component(Button.name,Button);
//导入MUI样式库
import './../lib/mui/dist/css/mui.min.css'

var vm = new Vue({
    el: "#app",
    data: {},
    render: c => c(app),
    router
    //注意 app 这个组件，是通过vm实例的render 函数渲染出来的，render函数渲染出来的组件，只能放入
    //el："#app"中。
    // 而 account 和goodslist 组件，通过路由监听匹配到的组件，这两个组件只能放入<router-view></router-view>中去
    //两者不冲突
});