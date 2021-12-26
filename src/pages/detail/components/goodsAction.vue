<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" dot ></van-goods-action-icon>
            <van-goods-action-icon icon="cart-o" text="购物车" ></van-goods-action-icon>
            <van-goods-action-icon icon="shop-o" text="店铺" ></van-goods-action-icon>
            <van-goods-action-button type="warning" text="加入购物车" ></van-goods-action-button>
            <van-goods-action-button type="danger" text="立即购买" ></van-goods-action-button>
        </van-goods-action>
    </div>
</template>

<script>
    export default {
        name: "goodsAction"
    }
</script>

<style scoped>

</style>