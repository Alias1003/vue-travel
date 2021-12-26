<template>
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions" v-if="isShow">
                <swiper-slide v-for="item in imgs" :key="item.id">
<!--                    <img class="swiper-img" v-bind:src="item.imgUrl" alt="">-->
                    <img class="swiper-img" v-bind:src="item.imgUrl" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
</template>

<script>
    export default {
        name: "detailSwiper",
        props:{
            imgs:Array
        },
        data(){
            return{
                swiperOptions: {
                    //定义轮播图图片滑动对应的点点
                    pagination: {
                        el: '.swiper-pagination',
                        type:'fraction'
                    },
                    //不停拖动
                    loop:true,
                    //轮播图滚动起来
                    autoplay:true,
                },
            }
        },
        computed:{
            isShow(){
                return this.imgs.length
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        background: #cccccc;
        width: 100%;
        height: 30%;
        overflow: hidden;
        margin-top: 1rem;
    }
    .wrapper .swiper-img{
        width: 100%;
    }
    .swiper-pagination{
        height: 0.5rem;
        width: 1rem;
        line-height: 0.5rem;
        font-size: 0.32rem;
        color: white;
        background: rgba(0,0,0,0.5);
        border-radius: 0.5rem;
        margin-left: 80%;
    }
</style>