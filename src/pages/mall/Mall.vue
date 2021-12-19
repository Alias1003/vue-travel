<template>
    <div>
        <mallHeader></mallHeader>
        <mallSearch></mallSearch>
        <mallSwipe :mSwipe="mallSwipe"></mallSwipe>
        <mallMsg></mallMsg>
        <keep-alive>
            <Footer></Footer>
        </keep-alive>
    </div>
</template>

<script>
    import mallHeader from './components/mallHeader'
    import mallSwipe from './components/mallSwipe'
    import mallSearch from './components/mallSearch'
    import mallMsg from './components/mallMsg'
    import Footer from '../../components/Footer'
    import axios from 'axios'
    export default {
        name: "Mall",
        components:{
            mallHeader,
            mallSwipe,
            mallSearch,
            Footer,
            mallMsg
        },
        data(){
            return{
                mallSwipe:[]
            }
        },
        methods:{
            getMallInfo(){
                axios.get('/mall.json')
                    .then(this.getMallInfoSucc)
                    .catch(err=>{
                        console.log(err);
                    })
            },
            getMallInfoSucc(res){
                console.log(res);
                res = res.data;
                if(res.ret&&res.data){
                    this.mallSwipe = res.data.mallSwipe;
                }
            }
        },
        mounted() {
            this.getMallInfo()
        }
    }
</script>

<style scoped>
    div{
        background: #efeff4;
    }
</style>