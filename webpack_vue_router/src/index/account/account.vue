<template>
    <div class="account">
        <p>this is account</p>
        <router-link to="/account/login">login</router-link>
        <router-link to="/account/register">register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        props: {},
    };
</script>
<!-- 默认是css 如果要使用scss语法 要使用lang指明-->
<!--只要 style 标签是在vue组件中，推荐要给style 指定scoped，将此样式定义为组件私有属性-->
<style lang="scss" scoped>
    body {
        div {
            font-style: italic;
        }
    }
</style>
