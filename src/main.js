import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import {i18n} from './i18n/vuetify/i18n'
import vuetify from './plugins/vuetify';

// import FlagIcon from 'vue-flag-icon'

// Vue.Use(FlagIcon)
// Vue.Use(vuetify)

// i18n.locale = "en"
Vue.config.productionTip = false


new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
