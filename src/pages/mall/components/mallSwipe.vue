<template>
    <div>
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions" v-if="showList">
                <swiper-slide v-for="item in mSwipe" :key="item.id">
                    <img class="swiper-img" v-bind:src="item.imgUrl" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';

    Vue.use(Lazyload);
    export default {
        name: "mallSwipe",
        props:{
            mSwipe:Array
        },
        data (){
            return {
                swiperOptions: {
                    //定义轮播图图片滑动对应的点点
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    //不停拖动
                    loop:true,
                    //轮播图滚动起来
                    autoplay:true
                },
            }
        },
        computed:{
            showList(){
                return this.mSwipe.length;
            }
        }
    }
</script>

<style scoped>
    .wrapper >>> .swiper-pagination-bullet-active{
        background: white !important;
    }
    /*网络还没加载出来时给图片位置设置高度*/
    .wrapper{
        width: 100%;
        overflow: hidden;
        height: 31.46%;
        background: #cccccc;
    }
    .swiper-img{
        width: 100%;
        height: 2.36rem;
    }
</style>