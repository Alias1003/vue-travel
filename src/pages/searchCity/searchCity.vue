<template>
    <div>
        <inputSearch></inputSearch>
        <alphabetList
                :alphabets="alphabetList"
                :lists="moreCities"
                @changeLetter="handLetter"
        ></alphabetList>
        <Cities
                :hLists="hotCities"
                :mCities="moreCities"
                :cLetter="letter"
        ></Cities>
    </div>
</template>

<script>
    import Cities from './components/Cities'
    import inputSearch from './components/inputSearch'
    import alphabetList from './components/alphabetList'
    import axios from 'axios'
    export default {
        name: "searchCity",
        data(){
            return{
                hotCities:[],
                moreCities:{},
                alphabetList:[],
                letter:''
            }
        },
        components:{
            Cities,
            inputSearch,
            alphabetList
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
                if(res.ret && res.data){
                    this.hotCities = res.data.hotCityList;
                    this.moreCities = res.data.cities;
                    this.alphabetList = res.data.Alphabet;
                }
            },
            handLetter(msg){
                // console.log(msg);//接收到alphabet传过来的数据
                this.letter = msg
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>