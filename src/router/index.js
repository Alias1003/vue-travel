import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Order from '../pages/order/Order.vue'
import Search from '../pages/search/Search.vue'
import Mine from '../pages/mine/Mine'
import Mall from '../pages/mall/Mall'

Vue.use(Router)

export default new Router({
    routes:[
        {path:"/",redirect:{name:'Home'}},
        {path:"/home",name:'Home',component:Home},
        {path:"/order",name:'Order',component:Order},
        {path:"/search",name:"Search",component:Search},
        {path:"/mine",name:"Mine",component:Mine},
        {path:"/mall",name:"Mall",component:Mall}
    ]
})