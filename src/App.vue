<template>
  <v-app>
    <v-main>
      <HomeView/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import HomeView from './layouts/home'

export default {
  name: 'App',
  components: {
    HomeView,
     
  },

  data: () => ({
    //
  }),
  methods: {
      closeError() {
        this.$store.dispatch('clearError')
      } 
    },
    computed: {
      error () {
        return this.$store.getters.error
      },
      isUserLogIn () {
        return this.$store.getters.isUserLoggedIn
      }
    },
  created () {
      this.$vuetify.lang.current = 'ru'
      
      this.$vuetify.theme.dark = true
       if(!this.$store.getters.isUserLoggedIn) {
            this.$store.dispatch('setLoginFromLocalStorage')
          }
    },
};
</script>
