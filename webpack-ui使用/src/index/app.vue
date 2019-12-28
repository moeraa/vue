<template>
    <div>
        <h1>this is app vue </h1>
        <mt-button type="danger" size="large" plain icon="more" @click="show">defalut</mt-button>
        <router-link to="/account">account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>

        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import 'bootstrap/dist/css/bootstrap.css';
    import './app.css'

    export default {
        data: {
            return: {
                toast: null,
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                this.show();
                setTimeout(() => {
                    this.toast.close();
                }, 3000)
            },
            show() {
                this.toast = Toast({
                    message: "this is message",
                    position: "top",
                    duration: -1,//-1 没有时长 默认3000ms
                    iconClass: "glyphicon glyphicon-heart",
                    className: 'myclass'
                });
            }
        }
    }

</script>
