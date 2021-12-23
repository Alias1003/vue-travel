<template>
    <div>
        <div class="Header">
            <router-link to="/">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <div class="Title">城市选择</div>

            <div class="search">
                <input class="header-input" type="text" placeholder="北京/bj/beijing"/>
                <i class="iconfont icon-sousuo"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inputSearch"
    }
</script>

<style scoped>
    .Header {
        position: fixed;
        width: 100%;
        top: 0;
        height: 2rem;
        line-height: 1rem;
        background: white;
        z-index: 100;
    }

    .icon-fanhui {
        font-size: 18px;
        padding: 0 0.2rem 0 0.2rem;
        float: left;
        display: inline;
        color: #666666;
    }
    .icon-fanhui:hover {
        color: black;
    }

    .Title {
        height: 1rem;
        line-height: 1rem;
        padding-left: 40%;
        font-size: 0.4rem;
    }

    .search {
        position: relative;
        color: #666666;
    }

    .header-input {
        background: rgb(238, 237, 243);
        height: 0.8rem;
        width: 84%;
        line-height: 0.8rem;
        color: #666666;
        border-radius: 0.4rem;
        margin: auto 0.2rem;
        padding-left: 0.8rem;
    }
    .icon-sousuo {
        position: absolute;
        left: 0.39rem;
        top: 0.01rem;
        font-size: 20px;
    }
</style>