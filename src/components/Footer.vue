<template>
    <div class="home">
<!--        <div class="home-list">-->
        <van-tabbar
                active-color="#7b24db"
                inactive-color="#B7BBC0"
                v-model="active"
                >
            <van-tabbar-item replace to="/home" icon="wap-home" name="home">首页</van-tabbar-item>
            <van-tabbar-item replace to="/mall" icon="shop" name="mall">里程商城</van-tabbar-item>
            <van-tabbar-item replace to="/order" icon="balance-list" name="order">订单</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="manager" name="mine">我的</van-tabbar-item>
        </van-tabbar>
<!--            <div class="list" v-for="item in fList" :key="item.id">-->
<!--                <div v-if="item.footerContent=='首页'">-->
<!--                    <router-link to="/home">-->
<!--                        <div :class="item.footerClass"></div>-->
<!--                        <p>{{item.footerContent}}</p>-->
<!--                    </router-link>-->
<!--                </div>-->
<!--                <div v-else-if="item.footerContent=='里程商城'">-->
<!--                    <router-link to="/mall">-->
<!--                        <div :class="item.footerClass"></div>-->
<!--                        <p>{{item.footerContent}}</p>-->
<!--                    </router-link>-->
<!--                </div>-->
<!--                <div v-else-if="item.footerContent=='订单'">-->
<!--                    <router-link to="/order">-->
<!--                        <div :class="item.footerClass"></div>-->
<!--                        <p>{{item.footerContent}}</p>-->
<!--                    </router-link>-->
<!--                </div>-->
<!--&lt;!&ndash;                <div v-else-if="item.footerContent=='我的'">&ndash;&gt;-->
<!--                    <router-link to="/mine">-->
<!--                        <div :class="item.footerClass"></div>-->
<!--                        <p>{{item.footerContent}}</p>-->
<!--                    </router-link>-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->
    </div>
</template>

<script>

    export default {
        name: "Footer",
        // props:{
        //     fList:Array
        // },
        data() {
            return {
                active: 'home',
                // icon: {
                //     active: 'https://img01.yzcdn.cn/vant/user-active.png',
                //     inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
                // },
            }
        }
    }
</script>

<style scoped>
    .home{
        height: 0;
        /*padding-bottom: 1rem;*/
        background: white;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 100;
    }
    .list{
        width: 25%;
        height: 8%;
        padding: 0.2rem 0;
        float: left;
        text-align: center;

    }
    .list p{
        font-size: 16px;
        color: #777777;
    }
    .list .iconfont{
        font-size: 30px;
        color: #777777;
    }
</style>