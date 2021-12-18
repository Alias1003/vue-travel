<template>
    <div>
        <div class="list">
            <div class="title">
                <h3>出行工具</h3>
                <div class="more">
                    <div class="more-content">
                        <p>更多</p>
                        <i class="iconfont icon-fanhui"></i>
                    </div>
                </div>
            </div>
            <div class="toolList" v-for="item in tList" :key="item.id">
                <i class="iconfont " :class="item.iconClass"></i>
                <p>{{item.titleList}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mineTool",
        props:{
            tList:Array
        }
    }
</script>

<style scoped>
    .list{
        margin-top: 0.2rem;
        height: 5.4rem;
        background: white;
    }
    .title{
        padding-top: 0.28rem;
    }
    .title h3{
        font-size: 0.4rem;
        padding: 0.28rem 0 0 0.44rem;
        display: inline;
    }
    .title .more{
        float: right;
        display: inline;
    }
    .title .more .more-content{
        float: left;
        padding-right: 0.4rem;
        color: #666666;
    }
    .title .more .more-content p{
        display: inline;
    }
    .title .more .iconfont{
        display: inline-block;
        transform: rotateY(180deg);
    }
    .toolList{
        width: 25%;
        height: 15%;
        text-align: center;
        padding: 0.35rem 0;
        float: left;
    }
    .toolList .iconfont{
        font-size: 0.6rem;
        color: #929cad;
    }
    .toolList p{
        padding-top: 0.1rem;
    }
</style>