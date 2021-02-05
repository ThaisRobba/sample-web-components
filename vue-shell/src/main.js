// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { applyPolyfills, defineCustomElements } from 'sample-component/loader'
import 'react-component'

Vue.config.productiontip = false

applyPolyfills().then(() => {
  defineCustomElements()
})

Vue.config.ignoredElements = ['react-component']

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
