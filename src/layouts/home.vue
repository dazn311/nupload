<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer" 
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Файловый сервер</v-toolbar-title>
    </v-app-bar>


    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
<!--          Main Main Main Main Main Main Main Main Main Main-->
          <template v-if="!this.$store.getters.isUserLoggedIn">
            <Auth></Auth>
          </template>
          <template v-if="this.$store.getters.isUserLoggedIn">
            <Auth></Auth>
          </template>

          
        </v-row>
      </v-container>
    </v-main>

    <v-bottom-navigation
      v-model="activeBtn"
      :input-value="showNav"
      color="indigo"
    >
      <v-btn>
        <span>Фото</span>
        <v-icon>mdi-folder-image</v-icon>
      </v-btn>

      <v-btn @click="switchLang()">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Заметки</span>
        <v-icon>mdi-message-text-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!-- <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Auth from '../components/Auth/Login';
import Auth from '../components/Auth/Login';
// import en from '../i18n/locales/en'
// import fr from '../i18n/locales/fr'
// import ru from '../i18n/locales/ru'
  export default {
    name: 'HomeView',

    data: () => ({
      
      drawer: false,
      activeBtn: 1,
      showNav: true,
    }),
    components: {
      Auth 
    },
    methods: {
      switchLang () {
        console.log('switchLang home view');
        //$vuetify.lang.t('$vuetify.LoginView') }}
        this.$vuetify.lang.current = 'ru'
        this.$vuetify.locale = 'ru'
      }
    }

  }
</script>
