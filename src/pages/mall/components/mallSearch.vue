<template>
    <div>
        <div class="search">
            <input class="header-input" type="text" placeholder="同程出行18会员日"/>
            <i class="iconfont icon-sousuo"></i>
            <p>694里程</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mallSearch"
    }
</script>

<style scoped>
    .search {
        position: relative;
        color: #666666;
        margin-top: 1rem;
        padding: 0.2rem;
    }

    .header-input {
        /*background: rgb(238, 237, 243);*/
        height: 0.8rem;
        width: 65%;
        line-height: 0.8rem;
        /*text-align: center;*/
        color: #666666;
        border-radius: 0.4rem;
        margin: auto 0.2rem;
        padding-left: 0.6rem;
        background: #ffffff;
        border: 1px solid #E5E5E5;
    }
    .icon-sousuo {
        position: absolute;
        left: 0.49rem;
        top: 0.45rem;
        font-size: 0.4rem;
    }

    p {
        float: right;
        color: green;
        padding-right: 0.3rem;
        position: absolute;
        top: 0.4rem;
        right: 0;
        font-size: 0.35rem;
    }
</style>