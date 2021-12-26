<template>
    <div class="Msg">
        <router-link to="/detail">
            <van-card
                    num="2"
                    tag="HOT"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic196.nipic.com%2Ffile%2F20181122%2F21485791_231411008000_2.jpg&refer=http%3A%2F%2Fpic196.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643096167&t=b0f806ebc24f42944f94f535e3dffc4a"
                    origin-price="10.00"
            ></van-card>
        </router-link>
        <router-link to="detail">
            <van-card
                    num="3"
                    price="20.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img0.baidu.com/it/u=574283538,544700096&fm=26&fmt=auto"
            >
                <template #tags>
                    <van-tag type="danger">热卖</van-tag>
                    <van-tag plain type="danger">满200-20</van-tag>
                </template>
            </van-card>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "mallMsg"
    }
</script>

<style scoped>
    .Msg {
        margin-top: 0.2rem;
    }
</style>