<template>
    <div class="Icons">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="Icons-content" v-for="item in page" :key="item.id">
                    <div v-bind:class="item.iconClass"></div>
                    <!--                <div class="iconfont icon-24gl-hotel"></div>-->
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
                },
                // iconList: [
                //     {id: '0001', iconClass: 'iconfont icon-24gl-hotel',iconContent:'订酒店'},
                //     {id: '0002', iconClass: 'iconfont icon-dangdidachefuwu2',iconContent:'低价打车'},
                //     {id: '0003', iconClass: 'iconfont icon-lvyou',iconContent:'旅游'},
                //     {id: '0004', iconClass: 'iconfont icon-qiangpiao',iconContent:'抢票'},
                //     {id: '0005', iconClass: 'iconfont icon-hewomenliaoliao',iconContent:'同程聊聊'},
                //     {id: '0006', iconClass: 'iconfont icon-31hongbao',iconContent:'火车票优惠'},
                //     {id: '0007', iconClass: 'iconfont icon-huochezhan',iconContent:'我的12306'},
                //     {id: '0008', iconClass: 'iconfont icon-pinche',iconContent:'船票拼车'},
                //     {id: '0009', iconClass: 'iconfont icon-hewomenliaoliao',iconContent:'同程聊聊'},
                // ],
            }
        },
        computed:{
            pages(){
                const pages = []
                this.iList.forEach((item,index)=>{
                    const page = Math.floor(index / 8)//显示在第几页
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(item)
                })
                return pages
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