<template>
    <div>
        <div class="header">
            <router-link to="/home">
<!--                <i class="iconfont icon-shouye"></i>-->
                <van-icon name="wap-home-o" size="0.4rem"/>
            </router-link>
            <p>里程商城</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mallHeader"
    }
</script>

<style scoped>
    i{
        border: 1px solid #cccccc;
        border-radius: 50%;
        padding: 0.1rem;
        margin: 0.2rem;
        color: #777777;
    }
    /*.icon-shouye{*/
    /*    font-size: 20px;*/
    /*    float: left;*/
    /*}*/
    .header p{
        position: absolute;
        top: 0.3rem;
        left: 43%;
        font-size: 20px;
    }
    .header{
        position: fixed;
        width: 100%;
        top: 0;
        background: white;
        z-index: 100;
    }
</style>