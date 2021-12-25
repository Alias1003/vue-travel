import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

let defaultCity = "中山";
try{
    if(localStorage.city1){
        defaultCity = localStorage.city1
    }
}catch (e) {
    console.log(e);
}

export default new Vuex.Store({
    //共享数据state
    state:{
        city1:defaultCity,
        city2:localStorage.city2||'广州',
    },
    actions:{
        changeCity(ctx,city){
            // console.log(city1);
            ctx.commit('changeCityList',city);
        },
    },
    mutations:{
        changeCityList(state,city){
            state.city1 = city;
            // localStorage.city1 = city;
            // console.log(city1);
            try{
                localStorage.city1 = city
            }catch (e) {
                console.log(e);
            }
        },
        //可以不通过actions使用commit去更新数据
        changeCity2(state,city){
                state.city2 = city;
                localStorage.city2 = city
                // console.log(city1);
            }
    }
})