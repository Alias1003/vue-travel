import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    //共享数据state
    state:{
        city1:'中山',
        city2:'广州'
    },
    actions:{
        changeCity(ctx,city){
            // console.log(city1);
            ctx.commit('changeCityList',city);

        }
    },
    mutations:{
        changeCityList(state,city){
            state.city1 = city;
            // console.log(city1);
        }
    }
})