export default {
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
        try{
            localStorage.city2 = city
        }catch (e) {
            console.log(e);
        }
        // console.log(city1);
    }
}