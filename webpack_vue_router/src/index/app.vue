<template>
    <div >
        <h1>this is  from  index.vue component  msg === {{msg}}</h1>
    </div>
</template>

<script>
    //到处一个默认对象
    export default {
        props: {
        },
        data(){
            //data 必须是方法
            return {
                msg:"123"
            }
        },
        methods:{
            show(){
                console.log("invoke  login.vue  show() method ")
            }
        }
    };
</script>
