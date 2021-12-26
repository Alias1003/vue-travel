<template>
    <div>
        <div class="header">
            <router-link to="/mall">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <p>商品详情</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsHeader"
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        width: 100%;
        line-height: 1rem;
        background: white;
        float: left;
        padding-left: 0.2rem;
        font-size: 0.32rem;
        position: fixed;
        top: 0rem;
        z-index: 100;
    }
    p{
        display: inline;
        padding-left: 36%;
    }
</style>