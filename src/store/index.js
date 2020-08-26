import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import user from './modules/user'
import shared from './modules/shared'
import routing from './modules/routing'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products, user, shared, routing
    }
})
