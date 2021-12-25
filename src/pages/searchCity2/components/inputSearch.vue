<template>
    <div>
        <div class="Header">
            <router-link to="/">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <div class="Title">城市选择</div>

            <div class="search">
                <input
                        class="header-input"
                        type="text"
                        placeholder="北京/bj/beijing"
                        v-model="keyword"
                />
                <i class="iconfont icon-sousuo"></i>
            </div>

        </div>
        <!--通过v-show="keyword"控制什么时候展现出来-->
        <div class="searchContent" v-show="keyword">
            <ul>
                <li v-for="item in list"
                    :key="item.id"
                    @click="cityClick(item.name)"

                >{{item.name}}</li>
                <li v-show="noDate">搜索不到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inputSearch",
        props:{
          cities:Object
        },
        data(){
            return{
                keyword:'',
                list:[],
                timer:null,
            }
        },
        methods:{
            cityClick(city){
                this.$store.commit("changeCity2",city)
                this.$router.push('/')
            }
        },
        computed:{
            noDate(){
                return !this.list.length
            }
        },
        watch:{
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer);
                }
                if(!this.keyword){
                    this.list = [];
                    return;
                }
                this.timer = setTimeout(()=>{
                    const result = [];
                    for(let i in this.cities){
                        this.cities[i].forEach((value)=>{
                            if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                                result.push(value)
                            }
                        })
                    }
                    this.list = result;
                },100)
            }
        }
    }
</script>

<style scoped>
    .Header {
        position: fixed;
        width: 100%;
        top: 0;
        height: 2rem;
        line-height: 1rem;
        background: white;
        z-index: 100;
    }

    .icon-fanhui {
        font-size: 18px;
        padding: 0 0.2rem 0 0.2rem;
        float: left;
        display: inline;
        color: #666666;
    }
    .icon-fanhui:hover {
        color: black;
    }

    .Title {
        height: 1rem;
        line-height: 1rem;
        padding-left: 40%;
        font-size: 0.4rem;
    }

    .search {
        position: relative;
        color: #666666;
    }

    .header-input {
        background: rgb(238, 237, 243);
        height: 0.8rem;
        width: 84%;
        line-height: 0.8rem;
        color: #666666;
        border-radius: 0.4rem;
        margin: auto 0.2rem;
        padding-left: 0.8rem;
    }
    .icon-sousuo {
        position: absolute;
        left: 0.39rem;
        top: 0.01rem;
        font-size: 20px;
    }

    .searchContent{
        background: white;
        position: absolute;
        top: 2rem;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
    .searchContent li{
        font-size: 0.28rem;
        padding: 0.1rem 0;
        border-bottom: 1px solid #cccccc;
        margin: 0.1rem 0.2rem;
        width: 90%;
    }
</style>