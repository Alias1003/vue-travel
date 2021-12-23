<template>
    <div>
        <van-index-bar
                :index-list="indexList"
                v-for="(items,key) in mCities"
                :key="key"
                :ref="key"
        >
            <van-index-anchor index="A">{{key}}</van-index-anchor>
            <div v-for="item in items" :key="item.id">
                <van-cell :title="item.name"></van-cell>
            </div>
        </van-index-bar>
    </div>
</template>

<script>
    export default {
        name: "searchList",
        data() {
            return {
                // indexList: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
                //     "O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                indexList: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
                    "O","P","Q","R","S","T","U","V","W","X","Y","Z"],

            };
        },
        props:{
            mCities:Object,
        }
    }
</script>

<style scoped>

</style>