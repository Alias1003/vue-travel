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
            <button>搜索</button>
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
        position: fixed;
        width: 100%;
        top: 0;
        height: 1rem;
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

    .Title {
        height: 1rem;
        line-height: 1rem;
        padding-left: 40%;
        font-size: 0.4rem;
    }

    .search {
        position: relative;
        color: #666666;
        margin-top: 1rem;
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

    button{
        float: right;
        color: green;
        padding-right: 0.3rem;
        position: absolute;
        top: 0.15rem;
        right: 0;
        font-size: 0.32rem;
        background: white;
    }
</style>