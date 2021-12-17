<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showList">
            <swiper-slide v-for="item in List" :key="item.id">
                <img class="swiper-img" v-bind:src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "Swiper1",
        props:{
            List:Array
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
                // swiperList:[
                //     {id:'0001', imgUrl:'https://img0.baidu.com/it/u=198206834,3955478735&fm=26&fmt=auto'},
                //     {id:'0002', imgUrl:'https://img0.baidu.com/it/u=2849012984,2395175327&fm=26&fmt=auto'},
                //     {id:'0003', imgUrl:'https://img1.baidu.com/it/u=342810470,942851656&fm=26&fmt=auto'},
                //     {id:'0004', imgUrl:'https://img1.baidu.com/it/u=2491013094,2322120236&fm=26&fmt=auto'},
                //     {id:'0005', imgUrl:'https://img1.baidu.com/it/u=1355341004,1333864908&fm=26&fmt=auto'},
                //
                // ],
            }
        },
        computed:{
            showList(){
                return this.List.length;
            }
        }

    }
</script>

<style scoped>
    /*样式穿透，设置父组件下所有的.swiper-pagination-bullet-active
    轮播图选中样式由swiper-pagination-bullet-active控制
    */
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