<template>
    <div>
        <div class="Header">
            <router-link to="/">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <div class="Title">同程旅行</div>
        </div>
        <div class="search">
            <input class="header-input" type="text" placeholder="同程出行18会员日"/>
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-kefu"></i>
            <p>搜索</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchHeader",
        props: {
            iSearch: String
        }
    }
</script>

<style scoped>
    .Header {
        position: relative;
    }

    .icon-fanhui {
        font-size: 18px;
        float: left;
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
    }

    .Title {
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        /*float: left;*/
    }

    .search {
        position: relative;
        color: #666666;
    }

    .header-input {
        background: rgb(238, 237, 243);
        height: 0.8rem;
        width: 75%;
        line-height: 0.8rem;
        /*text-align: center;*/
        color: #666666;
        border-radius: 0.4rem;
        margin: auto 0.2rem;
        padding-left: 0.6rem;
        /*clear:both;*/
    }

    .icon-kefu {
        padding-right: 0.2rem;
        position: absolute;
        right: 1rem;
        top: 0.20rem;
        font-size: 22px;

    }

    .icon-sousuo {
        position: absolute;
        left: 0.39rem;
        top: 0.20rem;
        font-size: 20px;
    }

    p {
        float: right;
        color: green;
        padding-right: 0.3rem;
        position: absolute;
        top: 0.28rem;
        right: 0;
    }
</style>