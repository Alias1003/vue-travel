<template>
    <div>
        <div class="address">
            <router-link to="/searchCity">
                <div class="from">
                    {{this.$store.state.city1}}
                </div>
            </router-link>
            <div class="icon">
                <i class="iconfont icon-huoche"></i>
            </div>
            <router-link to="/searchCity2">
                <div class="dest">
                    <!--从公共数据获取数据，不用父子组件间传参-->
                    {{this.$store.state.city2}}
                </div>
            </router-link>
            <div class="time">
                <van-cell
                        title="选择出发日期"
                        :value="date"
                        @click="show = true"
                        size="large"
                >
                </van-cell>
                <van-calendar
                        v-model="show"
                        @confirm="onConfirm"
                        :show-confirm="false"
                        class="date-text"
                >
                </van-calendar>
            </div>
            <button>火车票查询</button>
            <div class="search-history">
                <p>上海-西安</p>
                <p>中山-长沙</p>
                <p>中山-深圳北站</p>
                <p>中山-广州南站</p>
                <p>成都-陕西</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Addr",
        components: {},
        data() {
            return {
                date: '',
                show: false,
            };
        },
        methods: {
            formatDate(date) {
                return `${date.getMonth() + 1}/${date.getDate()}`;
            },
            onConfirm(date) {
                this.show = false;
                this.date = this.formatDate(date);
            },
        },

    }
</script>

<style scoped>
    .address {
        width: 95%;
        margin: 0.2rem auto;
    }

    .address div {
        float: left;
        display: inline;
    }

    .address .from, .dest {
        /*width: 3.2rem;*/
        width: 43.8%;
        height: 1rem;
        font-size: 0.5rem;
        line-height: 1rem;
        /*background: green;*/
        border-bottom: 1px solid #cccccc;
        color: black;
    }

    .address .from {
        text-align: left;
    }

    .address .dest {
        text-align: right;
    }

    .address .icon {
        width: 0.6rem;
        height: 0.6rem;
        border: 2px solid #06c584;
        border-radius: 50%;
        padding: 0.1rem;
    }

    .address .iconfont {
        font-size: 0.6rem;
        color: #06c584;
        font-weight: bold;
    }

    .time {
        clear: both;
        border-bottom: 1px solid #cccccc;
        width: 100%;
    }

    button {
        background: #06c588;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        border-radius: 0.5rem;
        font-size: 0.4rem;
        color: white;
        margin-top: 0.5rem;
    }

    .search-history {
        margin-top: 0.2rem;
        overflow: hidden;
        height: 0.5rem;
    }

    .search-history p {
        display: flex;
        float: left;
        margin: 0.1rem;
        justify-content: space-between;
        color: #666666;
    }
</style>