import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Detail from './views/Detail.vue'
import Login from './views/login.vue'
import Cart from './views/cart.vue'
import Uc from './views/usercenter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',component: Home},
    { path: '/test',component: About},
    { path: '/detail/:pid',component: Detail},
    { path:'/login',component: Login},
    { path:'/cart',component: Cart,meta:{checklog:true}},
    { path:'/usercenter',component: Uc,meta:{checklog:true}}
  ]
})

/* router.beforeEach((to, from, next) => {
  if(to.meta.checklog){
    
  }
}) */