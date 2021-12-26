<template>
    <div>
        <div class="cities" ref="wrapper">
            <div>
                <div id="current">
                    <p >当前选择城市</p>
                    <!--<div class="currentCity">{{this.$store.state.city1}}</div>-->
                    <div class="currentCity">{{this.currentCity}}</div>
                </div>


                <div id="hot">热门站点</div>
                <div class="hotCities"
                     v-for="item in hLists"
                     :key="item.id"
                     @click="cityClick(item.name)"
                >
                    <p class="hotCity">{{item.name}}</p>
                </div>
                <p class="citylist">城市列表</p>
                <div v-for="(items,key) in mCities"
                     :key="key"
                     :ref="key"
                >
                    <div class="title">{{key}}</div>
                    <div class="city"
                         v-for="item in items"
                         :key="item.id"
                         @click="cityClick(item.name)"
                    >
                        <div class="cityName">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "Cities",
        props:{
            hLists:Array,
            mCities:Object,
            cLetter:String
        },
        methods:{
            cityClick(city){
                // alert(city);
                //dispatc派发一个changeCity的函数，传递city过去
                // this.$store.dispatch('changeCity',city);
                this.changeCity(city);
                this.$router.push('/');//跳转回首页
            },
            ...mapActions(['changeCity'])
        },
        computed:{
            ...mapState({
                currentCity:'city1'
            })
        },
        watch:{
            cLetter(){
                // console.log(this.cLetter);
                if(this.cLetter){
                    //可以通过this.$refs获取到城市列表区域对应的值，是一个数组
                    const element = this.$refs[this.cLetter][0];
                    //滚动到对应的元素上
                    this.scroll.scrollToElement(element);
                }
            }
        },
        updated(){
            this.scroll = new Bscroll(this.$refs.wrapper,{
                mouseWheel: true
            })
        }
    }
</script>

<style scoped>
    .cities{
        position: absolute;
        top: 2rem;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }
    #current{
        /*background: red;*/
        margin: 0.2rem;
    }
    #current>p{
        color: #a3a3a3;
    }
    #hot{
        margin: 0.2rem;
        color: #a3a3a3;
    }

    .hotCities{
        margin: 0.1rem;
    }
    .hotCity,.currentCity{
        width: 26%;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 18px;
        border: 1px solid #cccccc;
        text-align: center;

    }
    .hotCity{
        float: left;
        margin: 0.1rem;
    }
    .currentCity{
        margin: 0.2rem 0;
    }

    .citylist{
        clear: both;
        font-size: 16px;
        padding: 0.2rem;
    }
    .cities .title{
        background: #f2f4f7;
        width: 100%;
        border-bottom: 1px solid #cccccc;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0 0.2rem;
    }
    .cities .city{
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.2rem;
    }
    .cities .cityName{
        border-bottom: 1px solid #cccccc;
    }


</style>