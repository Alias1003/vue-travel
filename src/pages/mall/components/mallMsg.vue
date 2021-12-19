<template>
    <div class="Msg">
        <van-card
                num="2"
                tag="HOT"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img1.baidu.com/it/u=3275206406,773753497&fm=26&fmt=auto"
                origin-price="10.00"
        ></van-card>
        <van-card
                num="3"
                price="20.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img1.baidu.com/it/u=3275206406,773753497&fm=26&fmt=auto"
        >
            <template #tags>
                <van-tag type="danger">热卖</van-tag>
                <van-tag plain type="danger">满200-20</van-tag>
            </template>
        </van-card>
    </div>
</template>

<script>
    export default {
        name: "mallMsg"
    }
</script>

<style scoped>
    .Msg{
        margin-top: 0.2rem;
    }
</style>