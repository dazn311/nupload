import Vue from 'vue';
// import Vuetify from 'vuetify';
import Vuetify, { VApp, VBtn } from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

// import i18n from '../i18n/vuetify/i18n'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import en from '../i18n/locales/en'
import fr from '../i18n/locales/fr'
import ru from '../i18n/locales/ru'


 
const lang = {
  t: (key, ...params) => Vuetify.lang.t(key, params),
  locales: {
      en,
      fr,
      ru
  },
  locale: 'ru',
}

Vue.use(Vuetify, {
  iconfont: 'md',
  components: {
      VApp,
      VBtn
  },
  directive: {
      Ripple
  }
});

const opts = {
    icons: {
      iconfont:  'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    lang,
    
  };

export default new Vuetify({opts
});
