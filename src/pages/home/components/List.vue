<template>
    <div class="list">
        <p class="active">火车票</p>
        <p>机票</p>
        <p>酒店</p>
        <p>汽车船票</p>
        <p>打车</p>
        <p>门票</p>
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
        height: 0.5rem;
        line-height: 0.5rem;
        margin: 0.3rem auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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