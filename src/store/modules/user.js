class User {
    constructor (id, userName, password) {
      this.id = id
      this.userName = userName
      this.password = password
    }
  }

export default {
    state: {
        user : null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
            
        }
    },
    getters: {
        user (state) {
            // return state.user //parseInt(localStorage.getItem('owner')) ||
            console.log('state.user', state.user);
            return  state.user
        },
        isUserLoggedIn (state) {
            return state.user != null
        }
    },
    actions: {
        setLoginFromLocalStorage ({ commit }) {
          commit('setUser', parseInt(localStorage.getItem('owner') ))
        },
        loginUserTmp ({commit}, {email, password} ) {
          console.log(email);
          if ((email === 'alex2505@bk.ru') && (password === '123456')){
              const newUser = {id: 5, login: email, password}
              localStorage.setItem('owner', '5')
              commit('setUser', newUser)

          }else {
              commit ('setError', 'Неверный логин или пароль!')
          }
        },
        registerUser ({commit}, {email, password} ) {
            // connect to server
            console.log(email);
            if ((email === 'alex2505@bk.ru') && (password === '123456')){
                const newUser = {id: 5, login: email, password}
                commit('setUser', newUser)
            }else {
                commit ('setError', 'Неверный логин или пароль!')
            }
            
        },
        // async registerUser ({commit}, {email, password}) {
        //     commit('clearError')
        //     commit('setLoading', true)
        //     try {
        //       const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        //       commit('setUser', new User(user.uid))
        //       commit('setLoading', false)
        //     } catch (error) {
        //       commit('setLoading', false)
        //       commit('setError', error.message)
        //       throw error
        //     }
        //   },
          async loginUser ({commit}, {email, password}) {
            commit('clearError')
            commit('setLoading', true)
            console.log(email + password)
            // try {
            //   const user = await fb.auth().signInWithEmailAndPassword(email, password)
            //   commit('setUser', new User(user.uid))
            //   commit('setLoading', false)
            // } catch (error) {
            //   commit('setLoading', false)
            //   commit('setError', error.message)
            //   throw error
            // }
          },
          autoLoginUser ({commit}, payload) {
            commit('setUser', new User(payload.uid))
          },
          logoutUser ({commit}) {
            // try {
            //     fb.auth().signOut()
            // } catch (error) {
                
            //     commit('setError', error.message)
            //     throw error
            // }
            commit('Вы вышли')
            commit('setUser', null)
          }
    },
    
    
}    
