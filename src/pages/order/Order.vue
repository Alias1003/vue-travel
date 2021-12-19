<template>
    <div>
        <order-header :oList="orderList"></order-header>
        <van-tabs swipeable
                  :color="'#17d66b'"
                  :line-height="'10px'"
                  class="selectTab"
                  :title-style="'fontSize=20px'"
        >
            <van-tab title="待出行订单">
                <orderReady></orderReady>
            </van-tab>
            <van-tab title="全部订单">
                <orderTime></orderTime>
                <orderList :oList="orderList"></orderList>
            </van-tab>
        </van-tabs>

<!--        <orderList :oList="orderList"></orderList>-->
    </div>
</template>

<script>
    import orderHeader from './components/orderHeader'
    import orderTime from './components/orderTime'
    import orderList from './components/orderList'
    import orderReady from './components/orderReady'
    import axios from 'axios'
    import Toast from "vant/es/toast";
    export default {
        name: "List",
        components:{
            orderHeader,
            orderTime,
            orderList,
            orderReady
        },
        data(){
            return{
                orderList:[],
            }
        },
        methods: {
            onClick(name, title) {
                Toast(title);

            },
            getOrderInfo() {
                axios.get('/order.json')
                    .then(this.getOrderInfoSucc)
                    .catch(err => {
                        console.log(err)
                    })
            },
            getOrderInfoSucc(res) {
                // console.log(res)
                res = res.data;
                if (res.ret && res.data) {
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
    /*高度*/
    .selectTab /deep/ .van-tabs--line {
        height: 60px;
    }
    .selectTab /deep/ .van-tabs__wrap {
        height: 60px;
    }
    /*字体大小*/
    .selectTab /deep/ .van-tab__text{
        font-size: 20px;
    }
    .selectTab /deep/ .van-tab--active{
        font-size: 20px;
    }
    /*.selectTab{*/
    /*    position: fixed;*/
    /*    top: 1rem;*/
    /*    width: 100%;*/
    /*}*/
</style>