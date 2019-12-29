<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder=" 请输入要评论的内容，最多120字。。。" maxlength="120">

        </textarea>
        <mt-button type="primary" size="large"> 发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.add_time">
                <div class="cmt-title">第{{index+1}}楼&nbsp;&nbsp;匿名用户:{{item.user_name}}&nbsp;&nbsp;发表时间{{item.add_time|dataFormat}}</div>
                <div class="cmt-body">
                    {{item.content==="undefined"?'什么评论都没有':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore()"> 加载更多</mt-button>
    </div>

</template>

<script>
    import Toast from 'mint-ui'

    export default {
        data() {
            return {
                pageIndex: 1,//默认展示第一页
                comments: [],
            }
        },
        created() {
            this.getCommentConent()
        },
        methods: {
            getCommentConent() {
                this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(result => {
                    if (result.body.status === 0) {
                        console.log(this.pageIndex);
                        // this.comments = result.body.message;
                        //每次获取评论，应该是不能把老数据覆盖，而是拼接到新数据
                        // console.log(result.body.message);
                        this.comments = this.comments.concat(result.body.message)

                    } else {
                        Toast('获取评论失败')
                    }
                })
            },
            getMore() {
                this.pageIndex++;
                this.getCommentConent()
            }
        },
        props: ["id"],
    };
</script>
<style lang="scss" scoped>

    .comment-container {
        h3 {
            font-size: 18px;
        }

        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
    ;

        .cmt-list {
            margin: 10px 0;

            .cmt-item {
                font-size: 13px;

                .cmt-title {
                    line-height: 30px;
                    background-color: #cccccc;
                }

                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            ;
            }
        }

    }

</style>
