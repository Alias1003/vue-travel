<template>
    <div>
        <div class="List border-topbottom" v-for="item in oList" :key="item.id">
            <div class="one">
                <i class="l" v-bind:class="item.iconClass"></i>
                <p class="addr l">{{item.addrList}}</p>
                <p class="price">{{item.priceList}}</p>
            </div>
            <div class="two">
                <p class="Type l">{{item.typeList}}</p>
<!--                <p class="Time l">{{time|dateFormat("mm-dd")}}</p>-->
                <p class="Time l">{{item.timeList}}</p>
                <p class="solution">{{item.solutionList}}</p>
            </div>
            <div class="btns">
                <button>删除订单</button>
                <button>在线咨询</button>
                <button>再次预订</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderList",
        props:{
          oList:Array,
        },
        data(){
            return{
                time : Date.now(),
            }
        },
        filters : {
            "dateFormat":function (value,fmStr) {
                let date = new Date(value);
                let year = date.getFullYear()+"";
                let month = date.getMonth()+1+"";
                let day = date.getDate()+"";
                let hour = date.getHours()+"";
                let minute = date.getMinutes()+"";
                let second = date.getSeconds()+"";
                if(fmStr && fmStr==="yyyy-mm-dd")
                    return `${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")}`;
                else if(fmStr && fmStr==="mm-dd"){
                    return `${month.padStart(2,"0")}月${day.padStart(2,"0")}日`;
                }
                else
                // padStart(2,"0")判断字符串长度是否大于2，不满足加0
                    return `${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")} ${hour.padStart(2,"0")}:${minute.padStart(2,"0")}:${second.padStart(2,"0")}`;
            }
        }
    }
</script>

<style scoped>
    .l{
        float: left;
    }

    .border-topbottom::before {
        border-color: #777777;
    }

    .border-topbottom::after {
        border-color: #777777;
    }

    .List{
        padding: 0.3rem 0.4rem 1.2rem 0.4rem;
        background: white;

    }
    .one {
        position: relative;
        font-size: 20px;
    }
    .one .icon-huoche{
        color: #0dc983;
        font-size: 20px;
    }
    .one .addr{
        padding-left: 0.3rem;
    }
    .one .price{
        color: red;
        position: absolute;
        right: 0.2rem;
    }
    .two{
        clear: both;
        font-size: 16px;
        padding: 0.2rem 0;
    }
    .two .Type{
        padding-left: 0.6rem;
    }
    .two .Time{
        padding: 0 1.8rem 0 0.4rem;
    }
    .btns{
        float: right;
    }
    button{
        background: white;

        font-size: 16px;
        border: 1px #c3c8d4 solid;
        border-radius: 0.4rem;
        padding: 0.1rem 0.2rem;
        margin: 0.1rem;
        color: #626262;
    }
</style>