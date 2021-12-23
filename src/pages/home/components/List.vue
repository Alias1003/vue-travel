<template>
    <div>
        <van-sticky :offset-top="50">
            <div class="list">
                <p class="active">火车票</p>
                <p>机票</p>
                <p>酒店</p>
                <p>汽车船票</p>
                <p>打车</p>
                <p>门票</p>
            </div>
        </van-sticky>
    </div>
</template>

<script>
    export default {
        name: "List",
    }
</script>

<style scoped>
    .list{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background: white;
    }
    .list>p.active{
        font-size: 20px;
        font-weight: bold;
    }
    /*.order>p.active>div{*/
    /*    height: 0.1rem;*/
    /*    width: 0.2rem;*/
    /*    background: green;*/
    /*}*/
</style>