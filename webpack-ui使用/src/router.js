import VueRouter from 'vue-router'

import account from "./index/account/account.vue";
import goodslist from "./index/goodslist/goodslist.vue";
import login from "./index/account/login.vue";
import register from "./index/account/register.vue";




var router = new VueRouter({
    routes: [
        {
            path: "/account", component: account,
            children: [
                {
                    path: "login", component: login
                }
                , {
                    path: "register", component: register
                }
            ]

        },
        {
            path: "/goodslist", component: goodslist
        }
    ]

});

export default router  //ES6 导出对象 