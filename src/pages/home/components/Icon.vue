<template>
    <div class="Icons">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="isShow">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="Icons-content" v-for="item in page" :key="item.id">
                    <div v-bind:class="item.iconClass"></div>
                    <p>{{item.iconContent}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "Icon",
        props:{
            iList:Array
        },
        data () {
            return {
                swiperOptions:{
                    autoplay:true,
                    loop:true
                },

            }
        },
        computed:{
            pages(){
                const pages = [];
                this.iList.forEach((item,index)=>{
                    const page = Math.floor(index / 8);//显示在第几页
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(item)
                });
                return pages
            },
            isShow(){
                return this.iList.length
            }
        }
    }
</script>

<style scoped>
    .Icons{
        height: 0;
        overflow: hidden;
        padding-bottom: 50%;
        /*background: red;*/
        color: rgb(96,103,120);
        clear: both;
    }
    .Icons-content{
        width: 25%;
        height: 25%;
        /*padding-bottom: 25%;*/
        /*padding-bottom: 6%;*/
        padding: 0.1rem 0;
        /*background: green;*/
        float: left;
    }
    .Icons-content .iconfont{
        text-align: center;
        font-size: 40px;
        padding: 0.25rem 0.25rem 0.1rem 0.25rem;
    }
    .Icons-content p{
        text-align: center;
        /*省略溢出的文字为...*/
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>