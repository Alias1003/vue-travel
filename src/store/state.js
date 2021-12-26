let defaultCity = "中山";
try{
    if(localStorage.city1){
        defaultCity = localStorage.city1
    }
}catch (e) {
    console.log(e);
}
let defaultCity2 = "广州";
try{
    if(localStorage.city2){
        defaultCity2 = localStorage.city2
    }
}catch (e) {
    console.log(e);
}
export default {
    city1: defaultCity,
    city2: defaultCity2
}