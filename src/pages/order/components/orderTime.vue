<template>
    <div>
        <div class="book">
            <p>预订日期：{{time | dateFormat}}</p>
<!--            <p>{{time | dateFormat("yyyy-mm-dd")}}</p>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderTime",
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
                else
                // padStart(2,"0")判断字符串长度是否大于2，不满足加0
                    return `${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")} ${hour.padStart(2,"0")}:${minute.padStart(2,"0")}:${second.padStart(2,"0")}`;
            }
        }
    }
</script>

<style scoped>
    /*.book{*/
    /*    position: relative;*/
    /*}*/
    .book p{
        clear: both;
        width: 63%;
        font-size: 16px;
        background: #c3c8d4;
        color: white;
        border-radius: 0.4rem;
        padding: 0.2rem 0.4rem;
        margin: 0.4rem 0.2rem 0.2rem 0.2rem;
    }
</style>