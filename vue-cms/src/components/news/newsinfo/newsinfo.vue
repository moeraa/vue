<template>
    <div class="newsinfo-container">
<!--        //大标题-->
        <h3 class="title"> {{newsInfos.title}}</h3>
<!--        //小标题-->
        <p class="subtitle">
            <span>发表时间：{{newsInfos.add_time | dataFormat}}</span>
            <span>点击{{newsInfos.click}}次</span>
        </p>
        <hr>
<!--        //新闻内容-->
        <div class="content" v-html="newsInfos.content"></div>
        <comment :id="this.id"></comment>
<!--        //评论子组件区域-->
    </div>
</template>

<script>
    import Toast from 'mint-ui'
    import comment from "../../tabbar/subcomponent/comment.vue";
    export default {
        data() {
            return {
                id: this.$route.params.id,//将URl 地址中的传递过来的id 保存到data上
                newsInfos: {},
            }
        },
        created() {
            this.getNewsInfo();
        },
        methods: {
            getNewsInfo() {
                this.$http.get("api/getnew/" + this.id).then(result => {
                    if (result.body.status === 0) {
                        // console.log(result.body.message[0]);
                        this.newsInfos = result.body.message[0]
                    } else {
                        Toast('获取新闻详情失败')
                    }

                })
            }
        },
        props: {},
        components:{//用户注册子组件
            comment
        }
    };
</script>
<style lang="scss">
    .newsinfo-container {
        padding: 0 4px;

        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px;
            color: red;
        }
        .subtitle {
            font-size: 14px;
            color: #2187e7;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
