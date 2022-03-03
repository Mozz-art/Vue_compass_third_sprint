import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from '@/App.vue'
import swal from 'sweetalert';
import VueSanitize from "vue-sanitize";
Vue.use(VueSanitize);

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
    component: () => import(/* webpackChunkName: "Home" */"@/views/login/index.vue"),
    
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
      component: () => import(/* webpackChunkName: "Home" */"@/views/login/index.vue"),
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
