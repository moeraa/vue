import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import app from './index/app.vue'
//自定义导入路由
import router from './router.js'

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