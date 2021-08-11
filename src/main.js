import Vue from 'vue'
import App from './App.vue'
import store from './application.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
