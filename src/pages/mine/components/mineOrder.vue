<template>
    <div>
        <div class="list">
            <h3>我的订单</h3>
            <div  v-for="item in mOrder" :key="item.id">
                <i class="iconfont" :class="item.iconClass"></i>
                <p>{{item.titleList}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mineOrder",
        props:{
            mOrder:Array
        }
    }
</script>

<style scoped>
    .list{
        margin-top: 0.2rem;
        height: 2.6rem;
        background: white;
    }
    .list>div{
        float: left;
        text-align: center;
        width: 25%;
        margin-top: 0.36rem;
    }
    h3{
        font-size: 20px;
        padding: 0.28rem 0 0 0.44rem;
    }
    .iconfont{
        font-size: 0.8rem;

    }
    .list div>p{
        margin-top: 0.1rem;
    }
</style>