<template>
    <div class="List border-bottom">
        <div class="List-content" v-for="item in mList" :key="item.id">
            <p>{{item.titleList}}</p>
            <div>
                {{item.contentList}}
                <!--                    <i class="iconfont icon-fanhui"></i>-->
                <i v-bind:class="item.iconClass"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mineList",
        props:{
            mList:Array,
        },
    }
</script>

<style scoped>
    .List{
        height: 0;
        padding-bottom: 20%;
        overflow: hidden;
        /*background: red;*/
    }
    .border-bottom::before{
        border-color: #efeff4;
    }
    .List-content{
        width: 25%;
        height: 25%;
        padding: 5% 0 20% ;
        /*background: green;*/
        text-align: center;
        float: left;
        background: white;
    }
    .List-content div{
         padding: 0.1rem 0 0 0.1rem;
     }
    .List-content p{
        font-weight: bold;
        font-size: .4rem;
    }
    i.icon-fanhui{
        display: inline-block;
        transform: rotateY(180deg);
    }
</style>