<template>
    <div class="home">
        <div class="home-list">
            <div class="list" v-for="item in fList" :key="item.id">
                <div v-if="item.footerContent=='首页'">
                    <router-link to="/home">
                        <div :class="item.footerClass"></div>
                        <p>{{item.footerContent}}</p>
                    </router-link>
                </div>
                <div v-else-if="item.footerContent=='里程商城'">
                    <router-link to="/mall">
                        <div :class="item.footerClass"></div>
                        <p>{{item.footerContent}}</p>
                    </router-link>
                </div>
                <div v-else-if="item.footerContent=='订单'">
                    <router-link to="/order">
                        <div :class="item.footerClass"></div>
                        <p>{{item.footerContent}}</p>
                    </router-link>
                </div>
                <div v-else-if="item.footerContent=='我的'">
                    <router-link to="/mine">
                        <div :class="item.footerClass"></div>
                        <p>{{item.footerContent}}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
            fList:Array
        },
    }
</script>

<style scoped>
    .home{
        height: 0;
        padding-bottom: 18%;
        background: white;
        width: 100%;
        position: fixed;
        bottom: 0;
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