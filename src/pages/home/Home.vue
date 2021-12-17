<template>
    <div>
        <Header :iSearch="inputSearch"></Header>
        <List></List>
        <Swiper1 :List="swiperList"></Swiper1>
        <Icon :iList="iconList"></Icon>
        <Recommend :rdList="recommendList"></Recommend>
        <Footer :fList="footerList"></Footer>
<!--        <p>home页面</p>-->
<!--        <router-link to="/List">跳转</router-link>-->

    </div>
</template>

<script>
    import Header from './components/Header'
    import List from './components/List'
    import Swiper1 from './components/Swiper'
    import Icon from './components/Icon'
    import Recommend from './components/Recommend'
    import axios from 'axios'
    import Footer from './components/Footer'
    export default {
        name: "Home",
        data(){
            return {
                inputSearch:"",
                iconList:[],
                swiperList:[],
                recommendList:[],
                footerList:[]
            }
        },
        components:{
            Header,
            List,
            Swiper1,
            Icon,
            Recommend,
            Footer,
        },
        methods:{
            getHomeInfo (){
                axios.get('/index.json')
                    .then(this.getHomeInfoSucc)
                    .catch(err=>{
                        console.log(err)
                    })
            },
            getHomeInfoSucc (res) {
                res = res.data;
                console.log(res);
                //如果页面正确输出内容且res下面的data有数据
                if (res.ret && res.data){
                    this.inputSearch = res.data.inputSearch;
                    this.iconList = res.data.iconList;
                    this.swiperList = res.data.swiperList;
                    this.recommendList = res.data.recommendList;
                    this.footerList = res.data.footerList;
                }
            }
        },
        mounted() {
            this.getHomeInfo()
        }
    }
</script>

<style scoped>

</style>