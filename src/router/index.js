import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Order from '../pages/order/Order.vue'
import Search from '../pages/search/Search.vue'
import Mine from '../pages/mine/Mine'
import Mall from '../pages/mall/Mall'
import searchCity from '../pages/searchCity/searchCity'
import searchCity2 from '../pages/searchCity2/searchCity'
import {
    Icon,
    Tabbar,
    TabbarItem,
    Card,
    Button,
    Tag,
    Toast,
    Tab,
    Tabs,
    Empty,
    Sticky,
    DatetimePicker,
    Calendar,
    Cell,
    IndexBar,
    IndexAnchor
} from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tag);
Vue.use(Tabs);
Vue.use(Empty);
Vue.use(Sticky);
Vue.use(DatetimePicker);
Vue.use(Calendar);
Vue.use(Cell);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Router);

export default new Router({
    routes: [
        {path: "/", redirect: {name: 'Home'}},
        {path: "/home", name: 'Home', component: Home},
        {path: "/order", name: 'Order', component: Order},
        {path: "/search", name: "Search", component: Search},
        {path: "/mine", name: "Mine", component: Mine},
        {path: "/mall", name: "Mall", component: Mall},
        {path: "/searchCity", name: "searchCity", component: searchCity},
        {path: "/searchCity2", name: "searchCity2", component: searchCity2}
    ]
})