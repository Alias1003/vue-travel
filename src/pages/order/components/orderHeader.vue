<template>
    <div>
        <div class="header">
            <router-link to="/home">
                <i class="iconfont icon-shouye"></i>
            </router-link>
            <p>订单</p>
        </div>
        <div class="all border-bottom">
            <div>待出行订单</div>
            <div class="active">全部订单
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderHeader",
    }
</script>

<style scoped>
    .border-bottom::before{
        border-color: #777777;
    }
    div{
        position: relative;
    }
    i{
        border: 1px solid #cccccc;
        border-radius: 50%;
        padding: 0.1rem;
        margin: 0.2rem;
        color: #777777;
    }
    .icon-shouye{
        font-size: 20px;
        float: left;
    }
    .header p{
        position: absolute;
        top: 0.3rem;
        left: 46%;
        font-size: 20px;
    }
    .all{
        width: 100%;
        position: relative;
    }
    .all div{
        clear: both;
        font-size: 20px;
        padding: 0.3rem 0.5rem;
        margin: 0 0.5rem;
    }
    .all div:nth-child(2){
        position: absolute;
        right: 0;
        top: 1rem;
    }
    .all div.active .line::after{
        content: "";
        width: 0.3rem;
        height: 0.001rem;
        position: absolute;
        right: 0.48rem;
        top: 0;
        border: 0.1rem solid green;
        border-radius: 0.1rem;
    }
    .all div.active{
        /*background: #13d171;*/
        border-radius: 0.2rem;
    }
    /*.all p.active.border-bottom::before{*/
    /*    position: absolute;*/
    /*    top: 0.5rem;*/
    /*    border: 0.1rem solid red;*/
    /*}*/
</style>