import VueRouter from 'vue-router'
//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer/HomeContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer/ShopCarContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer/MemberContainer.vue'

var router = new VueRouter({
    routes: [
        {path: "/", redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopCarContainer},
        {path: '/search', component: SearchContainer},
    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类， 默认是 "router-link-active "

});

export default router  //ES6 导出对象 