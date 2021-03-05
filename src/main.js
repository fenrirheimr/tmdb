// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import Vuex from 'vuex'
//
// import App from './App'
//
// import router from './router'
// import * as store from './store'
//
// Vue.config.productionTip = false
// Vue.use(Vuex)
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill'
// import 'muse-ui/dist/muse-ui.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'flag-icon-css/css/flag-icon.min.css'
import Vue from 'vue'
import { mapState } from 'vuex'
// import Vuelidate from 'vuelidate'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
// import { PLASMA, BACKEND, BACKEND_APIV2, PROFILE } from './remotes'
import storeFactory from './store'
import routerFactory from './router'
import vuetifyFactory from './vuetify'
// import vuetifyFactory from './vuetify'
// import VueSVGIcon from 'vue-svgicon'
// import MuseUI from 'muse-ui'
// import MessageFormat from 'string-format'
import resize from 'vue-resize-directive'
// import InlineSvg from 'vue-inline-svg'
// import {
//   REGISTRY,
//   web3ClientFactory,
//   plasmaSocketClientFactory,
//   profileSocketClientFactory,
//   passportClientFactory,
//   ratesSocketClientFactory,
//   memoryDeviceFactory,
//   trezorDeviceFactory,
//   ledgerDeviceFactory,
//   metamaskPluginFactory,
//   serverPluginFactory
// } from 'src/services'

// eslint-disable-next-line no-undef
// const config = __APP_CONFIG__

// if (typeof window['InstallTrigger'] !== 'undefined') {
//   // Firefox Browser. Reset default WebSocket.
//   // It's has a problem with web3 1.0.0.37 ws: https://github.com/ethereum/web3.js/issues/1559
//   window.WebSocket = require('websocket').w3cwebsocket
//   console.log('[WebSocket] Default WebSocket reset')
// }

// Vue.config.productionTip = false

// REGISTRY
//   .registerService('web3Client', web3ClientFactory(config))
//   .registerService('plasmaSocketClient', plasmaSocketClientFactory(config))
//   .registerService('profileSocketClient', profileSocketClientFactory(config))
//   .registerService('passportClient', passportClientFactory(config))
//   .registerService('ratesSocketClient', ratesSocketClientFactory(config))
//   .registerDevice('memory', memoryDeviceFactory(config))
//   .registerDevice('trezor', trezorDeviceFactory(config))
//   .registerDevice('ledger', ledgerDeviceFactory(config))
//   .registerPlugin('metamask', metamaskPluginFactory(config))
//   .registerPlugin('server', serverPluginFactory(config))

const store = storeFactory()
const router = routerFactory({ store })
const vuetify = vuetifyFactory({ Vue })

// store.dispatch('navigation/init', { router })

sync(store, router)

// Vue.use(Vuelidate)
// Vue.use(VueSVGIcon)
// Vue.use(MuseUI)
// Vue.component('inline-svg', InlineSvg)
// add format method to String.prototype
// MessageFormat.extend(String.prototype, {})

Vue.directive('resize', resize)

Vue.mixin({
  computed: {
    ...mapState({
      // sections: state => state.public.sections,
      // templates: state => state.public.templates,
      // language: state => state.language.language
    })
  },
  methods: {
  }
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
