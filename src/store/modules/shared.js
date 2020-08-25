export default {
    state: {
        loading : false,
        error: null
    },
    getters: {
        error (state) {
            return state.error
        },
        loading (state) {
            return state.loading
        }
    },
    mutations: {
        clearError (state) {
            state.error = null
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
    },
    actions: {
        clearError ({commit}) {
            commit('clearError')
        },
        setLoading ({commit}, payload) {
            commit('setLoading', payload)
        },
        setError ({commit}, payload) {
            commit('setError', payload)
        },
    }
    
    
}    