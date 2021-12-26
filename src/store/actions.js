export default {
    changeCity(ctx,city){
        // console.log(city1);
        ctx.commit('changeCityList',city);
    },
}