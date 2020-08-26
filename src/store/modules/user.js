import axios from 'axios';

class User {
    constructor (id, userName, password) {
      this.id = id;
      this.userName = userName;
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
            
        },
        logOutUser (state) {
            state.user = null
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
        logOutUser ({ commit}) {
            commit('logOutUser')

        },
        async loginUser ({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true);
            try {
                const response = await axios
                    .get(`http://zagotorvki.phpvueuploadfile/ajax/authf.php?u=${email}&p=${password}`);
                commit('setUser', new User( response.data[0].id, response.data[0].userName, response.data[0].password) );
                localStorage.setItem('owner', response.data[0].id);
                commit('setLoading', false);
                // console.log('response.data[0].userName :' , response.data[0].userName)

            } catch (error) {
                commit('setLoading', false);
                commit('setError', error.message);
                throw error
            }
        },
        setLoginFromLocalStorage ({ commit }) {
          commit('setUser', parseInt(localStorage.getItem('owner') ))
        },
        loginUserTmp ({commit}, {email, password} ) {
          console.log(email);
            //     commit('clearError')
            //     commit('setLoading', true)
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

            commit('setUser', null)
          }
    },
    
    
}    
