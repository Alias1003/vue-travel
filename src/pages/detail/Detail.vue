<template>
    <div>
        <goodsHeader></goodsHeader>
        <detailSwiper :imgs="imgLists"></detailSwiper>
        <price></price>
        <introduce></introduce>

        <goodsAction></goodsAction>
    </div>
</template>

<script>
    import axios from 'axios'
    import detailSwiper from './components/detailSwiper'
    import goodsAction from './components/goodsAction'
    import price from './components/price'
    import goodsHeader from './components/goodsHeader'
    import introduce from './components/introduce'
    export default {
        name: "Detail",
        data(){
            return {
                imgLists: []
            }
        },
        components:{
            detailSwiper,
            goodsAction,
            price,
            goodsHeader,
            introduce
        },
        methods:{
          getMsgInfo(){
              axios.get('detail.json')
                  .then(this.getMsgInfoSucc)
                  .catch(err=>{
                      console.log(err)
                  })
          } ,
          getMsgInfoSucc(res){
              res = res.data
              console.log(res)
              if (res.ret && res.data){
                  this.imgLists = res.data.imgList;
              }
          }
        },
        mounted() {
            this.getMsgInfo()
        }
    }
</script>

<style scoped>

</style>