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
        <div class="cheap">
            <div class="addr">
                <p>深圳</p>
                <i class="iconfont icon-huoche"></i>
                <p>广州</p>
            </div>
            <h3>12-20 周一</h3>
        </div>
        <div class="cheap">
            <div class="addr">
                <p>深圳</p>
                <i class="iconfont icon-huoche"></i>
                <p>广州</p>
            </div>
            <h3>12-20 周一</h3>
        </div>
        <div class="cheap">
            <div class="addr">
                <p>深圳</p>
                <i class="iconfont icon-huoche"></i>
                <p>广州</p>
            </div>
            <h3>12-20 周一</h3>
        </div>
        <div class="cheap">
            <div class="addr">
                <p>深圳</p>
                <i class="iconfont icon-huoche"></i>
                <p>广州</p>
            </div>
            <h3> 12-20 周一</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderReady"
    }
</script>

<style scoped>
    .title{
        padding-top: 0.28rem;
        background: white;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        margin-bottom: 0.2rem;
    }
    .title h3{
        font-size: 0.4rem;
        padding: 0.28rem 0 0 0.44rem;
        display: inline;
    }
    .title .more{
        float: right;
        display: inline;
    }
    .title .more .more-content{
        float: left;
        padding-right: 0.6rem;
        color: #666666;
    }
    .title .more .more-content p{
        display: inline;
    }
    .title .more .iconfont{
        display: inline-block;
        transform: rotateY(180deg);
    }
    .cheap{
        border: 1px solid #cccccc;
        width: 40%;
        border-radius: 0.2rem;
        float: left;
        margin: 0.2rem 0.2rem 0.2rem 0.3rem;
        padding: 0.1rem;
    }
    .cheap .addr p,.icon-huoche{
        float: left;
        padding: 0.2rem;
        font-size: 16px;
    }
    .cheap .addr .icon-huoche{
        font-size: 0.5rem;
    }
    .cheap .addr h3{
        display: block;
    }
</style>