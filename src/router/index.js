import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import swal from 'sweetalert';

Vue.use(VueRouter)
Vue.use(Vuex);

Vue.config.productionTip = false
const store = new Vuex.Store({

  state: {
    authenticated: false
  },
  mutations: { 
    setAuthentication(state, status){
      state.authenticated = status;
    }
  }
})
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
    beforeEnter: (to, from, next) =>{
      if (store.state.authenticated == false){
        next("/Compass-login")
        swal("Error 401:" ,"Acess denied: Unauthorized")
        
      } else{
        next()
      }
  }
},
    {
      path: '*',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) =>{
        swal("Erro 404:" ,"Page Not Found")
        next("/Compass-login")
      }
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router: router,
  render: h => h(App),
  store: store
}).$mount('#app')

export default router
