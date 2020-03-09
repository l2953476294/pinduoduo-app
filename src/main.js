import Vue from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from './router'
import store from './store'

import {
    Tabbar, TabbarItem, // 标签栏
    Tab, Tabs,    // 标签页
    Swipe, SwipeItem,   // 轮播
    Lazyload,   //  图片懒加载
    Grid, GridItem,   // 宫格
    Card,   // 卡片
    Field,  // 输入框
    Toast,  // 轻提示
    Button, // 按钮
    CellGroup,  // 单元格 组
    Cell,
    Divider,
    Icon,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    NavBar,
    Tag,
    SubmitBar
} from 'vant';

Vue.use(Tabbar).use(TabbarItem)
    .use(Tab).use(Tabs)
    .use(Swipe).use(SwipeItem)
    .use(Lazyload)
    .use(Grid).use(GridItem)
    .use(Card)
    .use(Field)
    .use(Toast)
    .use(Button)
    .use(Icon)
    .use(Cell).use(CellGroup)
    .use(Divider)
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)
    .use(NavBar)
    .use(Tag)
    .use(SubmitBar)

import Axios from 'axios'
import Cookies from 'js-cookie'
import {Indicator} from 'mint-ui';
import 'mint-ui/lib/style.css'


Axios.interceptors.request.use(function (config) {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
    return config;
}, function (error) {
    return Promise.reject(error);
});


Axios.interceptors.response.use(function (response) {
    Indicator.close();
    return response;
}, function (error) {

    return Promise.reject(error);
});

Vue.prototype.Cookies = Cookies
Vue.prototype.Axios = Axios

const Content = () => import('./components/Content')
const GoodsList = () => import('./components/GoodsList')
const Banner = () => import('./components/Banner')
const Category = () => import('./components/Category')
const NavBarPublic = () => import('./components/NavBarPublic')

Vue.component('Content', Content)
Vue.component('GoodsList', GoodsList)
Vue.component('Banner', Banner)
Vue.component('Category', Category)
Vue.component('NavBarPublic', NavBarPublic)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    let token = Cookies.get('token')
    //console.log(token)
    if (token) {
        next()
        if (to.name == 'user') {
            return next('/')
        }
    }else {
        if ( to.name == 'user' ){
            return next()
        }else {
            return next({path:'/user'})
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
