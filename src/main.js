import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.store({

  state:{ 
    authenticated: false,
  },
  mutations:{
    setAuthentication(state, status){
      
    }
  }
}


)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
