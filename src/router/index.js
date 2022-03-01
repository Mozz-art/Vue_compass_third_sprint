import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'


Vue.use(VueRouter)

const routes = [
  

  {
    path: '/',
    redirect: '/Compass-login'
  },

  {
    path: '/Compass-login',
    name: 'Login',
    component: Login,
    
  },
  {
    path: '/Compass-home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */"@/views/home/index.vue"),
    beforeEnter(to, from, next){
      next()

    }
  
    
    }, 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
