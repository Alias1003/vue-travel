<template>
    <div>
        <mineHeader></mineHeader>
        <mineList :mList="mineLists"></mineList>
        <mineOrder :mOrder="mineOrders"></mineOrder>
        <mineTool :tList="mineTools"></mineTool>
        <div class="icon">
            <i class="iconfont icon-mayijinfu"></i>
        </div>
        <keep-alive>
            <Footer></Footer>
        </keep-alive>
    </div>
</template>

<script>
    import mineHeader from './components/mineHeader'
    import mineList from './components/mineList'
    import mineOrder from './components/mineOrder'
    import mineTool from './components/mineTool'
    import Footer from '../../components/Footer'
    import axios from 'axios'
    export default {
        name: "Mine",
        data(){
            return{
                mineLists:[],
                mineOrders:[],
                mineTools:[]
            }
        },
        components: {
            mineHeader,
            mineList,
            mineOrder,
            mineTool,
            Footer
        },
        methods:{
            getMineInfo(){
                axios.get('/mine.json')
                    .then(this.getMineInfoSucc)
                    .catch(err=>{
                        console.log(err)
                    })
            },
            getMineInfoSucc(res) {
                res = res.data;
                console.log(res);
                if (res.ret && res.data) {
                    this.mineLists = res.data.mineList;
                    this.mineOrders = res.data.mineOrder;
                    this.mineTools = res.data.mineTool;
                }
            }
        },
        mounted() {
            this.getMineInfo()
        }
    }
</script>

<style scoped>
    div{
        background: #efeff4;

    }
    .icon{
        height: 1.8rem;
        line-height: 1.8rem;
        width: 100%;
        margin: auto;
        text-align: center;
        padding-bottom: 1rem;
    }
    .iconfont{
        font-size: 0.8rem;
        color: #dadee7;
    }
</style>