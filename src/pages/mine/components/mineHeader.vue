<template>
    <div class="header">
        <div class="header-bar">
            <router-link to="/home">
                <i class="iconfont icon-shouye"></i>
            </router-link>
            <p class="wo">我的</p>
        </div>
        <div class="useMsg">
            <img src="https://img1.baidu.com/it/u=2041210536,1832675485&fm=26&fmt=auto" alt="头像">
            <div class="useName">
                <p>昵称</p>
                <div class="vip">
                    <span class="iconfont icon-huiyuan"></span>
                    <p>会员</p>
                </div>
            </div>
            <div class="sign">签到</div>
        </div>
        <div class="card">
            会员卡
        </div>
    </div>
</template>

<script>
    export default {
        name: "mineHeader"
    }
</script>

<style scoped>
    .header{
        background: #06c584;
        height: 3.8rem;
        margin: 0;
        padding: 0;
    }
    .header-bar{
        background: #06c584;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }
    i{
        border: 1px solid #cccccc;
        border-radius: 50%;
        padding: 0.1rem;
        margin: 0.2rem;
        color: #e6e6e6;
        background: #05a770;
    }
    .icon-shouye{
        font-size: 20px;
        float: left;
    }
    .header .wo{
        position: absolute;
        top: 0.3rem;
        left: 46%;
        font-size: 0.4rem;
        color: white;
    }
    .useMsg{
        clear: both;
        /*margin-bottom: 0.2rem;*/
        padding-bottom: 0.4rem;
    }
    .useMsg div,img{
        float: left;
    }
    .useMsg .sign{
        float: right;
    }
    img{
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        margin: 1.1rem 0.2rem 0 0.2rem;
    }
    .useName p{
        font-size: 20px;
        color: white;
        margin: 1.3rem 0 0.2rem;
    }
    .useName .vip{
        height: 0.5rem;
        padding: 0.05rem 0.2rem;
        border-radius: 0.4rem;
        background: #e0e1e2;
        color: #777777;
        font-size: 16px;
    }
    .useName .icon-huiyuan{
        font-size: 26px;
        color: white;
        background: #9fa6ab;
        border-radius: 50%;
        margin-right: 0.1rem;
        float: left;
    }
    .useName .vip p{
        height: 0.5rem;
        line-height: 0.5rem;
        color: #777777;
        font-size: 16px;
        display: inline;
    }
    .sign{
        background: white;
        height: 0.8rem;
        width: 1.5rem;
        line-height: 0.8rem;
        font-size: 16px;
        color: #793d07;
        margin-top: 1.4rem;
        border-bottom-left-radius: 0.4rem;
        border-top-left-radius: 0.4rem;
        box-sizing: border-box;
        padding-left: 0.4rem;
    }
    .card{
        clear: both;
        background: #ffdc91;
        color: #453001;
        height: 0.92rem;
        width: 80%;
        margin: 2.5rem auto 0;
        border-top-left-radius: 0.2rem;
        border-top-right-radius: 0.2rem;
        line-height: 0.92rem;
        font-size: 16px;
        box-shadow: -0.05rem -0.05rem 0.05rem #109f6e;
        box-sizing: border-box;
        padding-left: 35%;
    }
</style>