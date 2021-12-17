<template>
    <div>
        <div class="recommend border-bottom" v-for="rec in rdList" :key="rec.id">
            <img :src="rec.imgUrl" alt="">
            <div class="item">
                <div class="item-title">{{rec.title}}</div>
                <div class="item-content">{{rec.content}}</div>
                <button class="item-btn">查看详情</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
            rdList:Array
        },
        data(){
            return{
                // recommendList: [
                //     {
                //         id: '001',
                //         imgUrl: "https://img1.baidu.com/it/u=3275206406,773753497&fm=26&fmt=auto",
                //         title: '蒜香排骨',
                //         content: '具体做法'
                //     },
                //     {
                //         id: '002',
                //         imgUrl: "https://img1.baidu.com/it/u=3275206406,773753497&fm=26&fmt=auto",
                //         title: '蒜香排骨',
                //         content: '具体做法'
                //     },
                //     {
                //         id: '003',
                //         imgUrl: "https://img1.baidu.com/it/u=3275206406,773753497&fm=26&fmt=auto",
                //         title: '蒜香排骨',
                //         content: '具体做法'
                //     }
                // ]
            }
        }
    }
</script>

<style scoped>
    .recommend {
        height: 2.8rem;
        width: 100%;
    }
    .recommend img{
        width: 40%;
        height: 90%;
        padding: 0.1rem;
        margin-right: 0.2rem;
        float: left;
        display: inline-block;
    }
    .item{
        padding: 0.2rem 0;
    }
    .item-title{
        padding: 0.2rem 0;
        font-size: 20px;
        font-weight: bold;
    }
    .item-content{
        padding: 0.2rem 0;
        color: #cccccc;
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    button{
        background: orange;
        color: #666666;
        border-radius: 0.1rem;
        margin-top: 0.2rem;
        cursor: pointer;
    }
</style>