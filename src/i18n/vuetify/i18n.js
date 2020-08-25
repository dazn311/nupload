import Vue from 'vue'
import {VueI18n} from 'vue-i18n'
//
Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
    ru: {
      message: {
        hello: 'Bonjour', 
        formAuthHeader: 'Авторизация'
      },
      LoginView: 'ddf'
    },
    en: {
      message: {
        hello: 'hello world',
        formAuthHeader: 'Authorization'
      },
      LoginView: 'ddf en'
    }
  }
  
  // Create VueI18n instance with options
export const i18n = new VueI18n({
    locale: 'ru', // set locale
    fallbackLocale: 'en',
    messages, // set locale messages
  })
