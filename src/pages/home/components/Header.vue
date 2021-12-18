<template>
    <div>
        <div class="Title">同程旅行</div>
        <div class="Header">
            <router-link to="/search">
                <div class="header-input">
                    <i class="iconfont icon-sousuo"></i>
                    {{this.iSearch}}
                    <i class="iconfont icon-kefu r"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            iSearch: String
        }
    }
</script>

<style scoped>
    .r{float: right}
    .Title{
        height: 1rem;
        line-height: 1rem;
        text-align: center;
    }

    .header-input{
        background: rgb(238,237,243);
        height: 0.8rem;
        width: 90%;
        line-height: 0.8rem;
        text-align: center;
        color: #666666;
        border-radius: 0.4rem;
        margin: auto;
    }
    .icon-kefu{
        padding-right: 0.2rem;
    }
</style>