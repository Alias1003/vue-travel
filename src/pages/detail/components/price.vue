<template>
    <div>
        <p class="money">￥44</p>
        <div class="msg">
            <div>商品券|满119-10</div>
            <div>里程最高抵扣12元</div>
            <p>领券
                <i class="iconfont icon-fanhui"></i>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "price"
    }
</script>

<style scoped>
    .money{
        color: #eb4c43;
        font-size: 0.32rem;
        font-weight: bold;
        margin: 0.4rem 0.2rem 0.2rem;
    }
    .msg{
        color: #ff0000;
        margin-left: 0.2rem;
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .msg>div{
        float: left;
        display: inline;
        background: #fff5f4;
        border: 1px solid #fbd3d0;
        margin-right: 0.1rem;
        padding: 0 0.1rem;
    }
    .msg>p{
        float: right;
        margin-right: 0.2rem;
    }
    .msg .icon-fanhui{
        font-size: 0.28rem;
        display: inline-block;
        transform: rotateY(180deg);
    }
</style>