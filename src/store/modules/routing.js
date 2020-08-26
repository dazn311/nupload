// class Rout {
//     constructor (path, component) {
//         this.path = path;
//         this.component = component;
//     }
// }

export const pathList = ['HomePage', 'LoginPage', 'ListPhoto', 'UploadFiles', 'NotePage']
export default {
    state: {
        routing : 'home',
    },
    getters: {
        getRouting (state) {
            return state.routing
        }
    },
    mutations: {
        setRoute (state, payload) {
            state.routing = payload
        },
    },
    actions: {
        setRouting ({commit}, payload) {
            commit('setRoute', payload)
        },
    }


}
