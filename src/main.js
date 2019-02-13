import Vue from 'vue'
import App from './App.vue'

import YeuUI from 'yeu-ui'
Vue.use(YeuUI)

new Vue({
  el: '#app',
  render: h => h(App)
})