<template>
    <div>
        <div class="cheap" v-for="item in cList" :key="item.id">
            <div class="addr">
                <div class="addr-list">
                    {{item.fromList}}
                    <i class="iconfont " v-bind:class="item.iconClass"></i>
                    {{item.toList}}
                </div>
                <h3>{{item.timeList}}</h3>
            </div>
            <div class="price">
                <p>{{item.moneyList}}</p>
                <p>{{item.discountList}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cheapList",
        props:{
            cList:Array
        }
    }
</script>

<style scoped>
    .cheap {
        border: 1px solid #cccccc;
        width: 40%;
        border-radius: 0.2rem;
        float: left;
        margin: 0.1rem 0.1rem 0.1rem 0.3rem;
        padding: 0.1rem;
    }

    .cheap .addr,.price{
        height: 1rem;
        float: left;
           }
    .addr{
        width: 70%;
    }
    .addr-list{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.3rem;
        padding: 0.1rem;
    }
    .addr-list .icon-huoche{
        font-size: 0.36rem;
    }
    .addr h3{
        clear: both;
        font-size: 0.24rem;
        margin: 0.1rem;
    }
    .price {
        float: right;
        display: inline;
        border-left: 1px solid #cccccc;
        height: 0.6rem;
        margin-top: 0.2rem;
        color: red;
        font-size: 0.24rem;
        text-align: center;
        width: 29%;
    }
    .price>p:nth-child(1){
        font-size: 0.3rem;
        margin-bottom: 0.1rem;
    }
    .price>p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>