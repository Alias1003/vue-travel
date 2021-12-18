<template>
    <div>
        <order-header></order-header>
        <orderTime></orderTime>
        <orderList :oList="orderList"></orderList>
    </div>
</template>

<script>
    import orderHeader from './components/orderHeader'
    import orderTime from './components/orderTime'
    import orderList from './components/orderList'
    import axios from 'axios'
    export default {
        name: "List",
        components:{
            orderHeader,
            orderTime,
            orderList
        },
        data(){
            return{
                orderList:[],
            }
        },
        methods:{
            getOrderInfo(){
                axios.get('/order.json')
                    .then(this.getOrderInfoSucc)
                    .catch(err=>{
                        console.log(err)
                    })
            },
            getOrderInfoSucc(res){
                // console.log(res)
                res = res.data;
                if(res.ret && res.data){
                    this.orderList = res.data.orderList;
                }
            }
        },
        mounted() {
            this.getOrderInfo()
        }
    }
</script>

<style scoped>
    div{
        background: #eceef0;
    }
</style>