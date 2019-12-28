<template>
    <div class="HomeContainer">
        <!--        轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipeList" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <!--        九宫格转换为六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">Home</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">Email</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">Chat</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">location</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">Search</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">Phone</div>
            </a></li>
        </ul>

    </div>
</template>
<script>
    import Toast from 'mint-ui'

    export default {
        data() {
            return {
                swipeList: null
            }
        },
        created() {
            this.getSwipe();
        },
        methods: {
            getSwipe() {
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
                    console.log(result.body);
                    if (result.body.status === 0) {
                        this.swipeList = result.body.message
                    } else {
                        Toast("获取轮播图失败。。。")
                    }
                })
            }
        },
        props: {},
    };
</script>
<style lang="scss" scoped>
    .mint-swipe {
        height: 400px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: rebeccapurple;
            }

            &:nth-child(2) {
                background-color: rebeccapurple;
            }

            &:nth-child(3) {
                background-color: rebeccapurple;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }


</style>
