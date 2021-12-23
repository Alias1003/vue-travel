<template>
    <div>
        <van-empty description="暂无待出行订单"></van-empty>
        <div class="title">
            <h3>特价车票</h3>
            <div class="more">
                <div class="more-content">
                    <p>查看更多</p>
                    <i class="iconfont icon-fanhui"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderReady",
    }
</script>

<style scoped>
    .title {
        padding-top: 0.28rem;
        background: white;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        margin-bottom: 0.2rem;
    }

    .title h3 {
        font-size: 0.4rem;
        padding: 0.28rem 0 0 0.44rem;
        display: inline;
    }

    .title .more {
        float: right;
        display: inline;
    }

    .title .more .more-content {
        float: left;
        padding-right: 0.6rem;
        color: #666666;
    }

    .title .more .more-content p {
        display: inline;
    }

    .title .more .iconfont {
        display: inline-block;
        transform: rotateY(180deg);
    }


</style>