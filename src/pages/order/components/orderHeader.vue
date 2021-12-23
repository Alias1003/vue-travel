<template>
    <div class="list">
        <div class="list-content  border-bottom">
            <div class="header">
                <router-link to="/home">
                    <i class="iconfont icon-shouye"></i>
                </router-link>
                <p>订单</p>
            </div>
<!--            <div class="all">-->
<!--                <div>待出行订单</div>-->
<!--                <div class="active">全部订单-->
<!--                    <div class="line"></div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>

    export default {
        name: "orderHeader",


    }
</script>

<style scoped>
    .list{
        height: 1rem;
        background: #777777;
    }
    .border-bottom::before{
        border-color: #777777;
    }
    .list-content{
        background-color: white;
        position: fixed;
        width: 100%;
        height: 1rem;
        /*left: 0;*/
        top: 0;
        z-index: 100;
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
    /*.all{*/
    /*    width: 100%;*/
    /*    position: relative;*/
    /*}*/
    /*.all div{*/
    /*    clear: both;*/
    /*    font-size: 20px;*/
    /*    padding: 0.3rem 0.5rem;*/
    /*    margin: auto;*/
    /*}*/
    /*.all div:nth-child(1){*/
    /*    position: absolute;*/
    /*    left: 0.6rem;*/
    /*    top: 1rem;*/
    /*}*/
    /*.all div:nth-child(2){*/
    /*    position: absolute;*/
    /*    right: 0.6rem;*/
    /*    top: 1rem;*/
    /*}*/
    /*.all div.active>.line::after{*/
    /*    content: "";*/
    /*    width: 0.3rem;*/
    /*    height: 0.001rem;*/
    /*    position: absolute;*/
    /*    right: 0;*/
    /*    top: -0.3rem;*/
    /*    border: 0.1rem solid green;*/
    /*    border-radius: 0.1rem;*/
    /*}*/
    /*.all div.active{*/
    /*    border-radius: 0.2rem;*/
    /*}*/
</style>