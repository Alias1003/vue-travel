<template>
    <div>
        <searchHeader></searchHeader>
        <searchList :mCities="Cities"></searchList>
    </div>
</template>

<script>
    import searchHeader from './components/searchHeader'
    import searchList from './components/searchList'
    import axios from 'axios'
    export default {
        name: "Search",
        components:{
            searchHeader,
            searchList
        },
        data(){
            return{
                Cities:{}
            }
        },
        methods:{
            getCityInfo(){
                axios.get('/city.json')
                    .then(this.getCityInfoSucc)
                    .catch(err=>{
                        console.log(err);
                    })
            },
            getCityInfoSucc(res){
                console.log(res);
                res = res.data;
                if (res.ret&&res.data) {
                    this.Cities = res.data.cities;
                }
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>