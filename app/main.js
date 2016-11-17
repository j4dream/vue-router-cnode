import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import routes from './routes'

Vue.use(VueRouter)

var router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})