import Vue from 'vue'
import Router from 'vue-router'
// tabbar 组件
const Home = ()=>import('../views/Home/')
  // 主页下 二级路由
const Recomend = ()=>import('../views/Recomend/')
const GoodsBuy = ()=>import('../views/GoodsBuy/')
const Cart = ()=>import('../views/Cart/')
const Chat = ()=>import('../views/Chat/')
const User = ()=>import('../views/User/')
const NotFount = ()=>import('../views/NotFount/')

const GoodsList = ()=>import('../components/GoodsList')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/recomend',
      name: 'recomend',
      component: Recomend
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/goodsBuy',
      name: 'goodsBuy',
      component: GoodsBuy
    },
    {
        path: '/goodslist',
      name: 'goodslist',
      component: GoodsList
    },
    {
      path: '*',
      component: NotFount
    }
  ]
})
