<template>
    <div class="news">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left"
                         :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间 {{item.add_time | dataFormat}}</span>
                            <span>点击次数：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Toast from 'mint-ui'

    export default {
        data() {
            return {
                newList: []//保存新闻列表数据
            }
        },
        created() {
            this.getNewsList()
        },
        methods: {
            //获取新闻列表
            getNewsList() {
                this.$http.get("api/getNewslist").then(result => {
                    if (result.body.status === 0) {
                        //如果成功需要将数据，保存到data上
                        this.newList = result.body.message
                    } else {
                        Toast('获取新闻列表失败')
                    }
                })
            }
        },
        props: {},
    };
</script>
<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }

            .mui-ellipsis {
                font-size: 12px;
                color: #2187e7;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
