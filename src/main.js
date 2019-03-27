import Vue from 'vue'
import VueResource from 'vue-resource' 
import VueTelInput from 'vue-tel-input'
import LoadScript from 'vue-plugin-load-script'
import {router} from './router'
import {store} from './store'
import App from './App.vue'

Vue.use(VueTelInput)
Vue.use(VueResource)
Vue.use(LoadScript);
Vue.http.options.root = 'https://ck-hukuk-under-construction.firebaseio.com/'

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
