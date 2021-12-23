<template>
    <div>
        <Header :iSearch="inputSearch"></Header>
        <List></List>
        <Swiper1 :List="swiperList"></Swiper1>
        <Addr></Addr>
        <Icon :iList="iconList"></Icon>

        <div id="fixed"></div>
        <keep-alive>
            <Footer></Footer>
        </keep-alive>
    </div>
</template>

<script>
    import Header from './components/Header'
    import List from './components/List'
    import Swiper1 from './components/Swiper'
    import Icon from './components/Icon'
    import Addr from './components/Addr'
    import axios from 'axios'
    import Footer from '../../components/Footer'
    export default {
        name: "Home",
        data(){
            return {
                inputSearch:"",
                iconList:[],
                swiperList:[],

            }
        },
        components:{
            Header,
            List,
            Swiper1,
            Icon,
            Footer,
            Addr
        },
        methods:{
            getHomeInfo (){
                axios.get('/home.json')
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
                }
            }
        },
        mounted() {
            this.getHomeInfo()
        }
    }
</script>

<style scoped>
    #fixed{
        height: 1rem;
        width: 100%;
    }
</style>