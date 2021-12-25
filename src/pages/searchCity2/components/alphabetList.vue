<template>
    <div>
<!--        <div class="alphabet" v-for="item in alphabets" :key="item.id">-->
<!--            <div>{{item.name}}</div>-->
<!--        </div>-->
        <div class="alphabet">
            <div v-for="(items,key) in lists" :key="key" @click="letterClick">{{key}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "alphabetList",
        props:{
            alphabets:Array,
            lists:Object
        },
        methods:{
            letterClick(e){
                this.$emit("changeLetter",e.target.innerText);
                // console.log(e.target.innerText);
            }
        }
    }
</script>

<style scoped>
    .alphabet{
        /*position: absolute;*/
        position: fixed;
        top: 2.2rem;
        right: 0;
        width: 10%;
        /*background: red;*/
        color: #28c54d;
        font-size: 0.32rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        z-index: 100;
    }
    .alphabet div{
        padding: 0.08rem 0;
    }
</style>