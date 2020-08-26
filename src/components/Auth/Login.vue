<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>
<!--                  Авторизация-->
<!--                  {{ $vuetify.lang.t(`$vuetify.LoginView`) }}-->
                    {{ $vuetify.lang.t('$vuetify.LoginView') }}

                  <!-- {{ this.$root.$i18n.lang}} {{ $vuetify.lang.t('noDataText') }} <flag iso="it" />
<flag iso="gb" />
<flag iso="us" /> {{ $vuetify.lang.t('next') }}-->
</v-toolbar-title>
              
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" color="indigo" v-model="valid" lazy-validation>
                  <v-text-field :rules="loginRules" label="Логин" name="email" prepend-icon="mdi-account" required
                  type="text" v-model="email"
                  ></v-text-field>
                  <v-text-field v-model="password" :counter="3" prepend-icon="lock" name="password" label="Password" type="password"
                  :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onSubmit"
                :disabled="!valid"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>

    export default {
        data () {
            return {
                email: '',
                password: '',
                valid: false,
                loginRules: [
                    value => !!value || 'Введите логин.',
                    value => (value && value.length >= 3) || 'Минимальное 3 символа',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules:[
                    v => !!v || 'Требуется пароль',
                    v => (v && v.length >= 3) || 'Пароль желательно более 3 символов'
                ],

            }

        },
        computed: {
          loading () {
            return this.$store.getters.loading
          }
        },
        methods:{
                onSubmit(){
                    if(this.$refs.form.validate()){
                        const user = {
                            email: this.email,
                            password: this.password
                        };
                        this.$store.dispatch('loginUser', user)
                        .then(() => {
                            // console.log('ok login', this.$store.getters.isUserLoggedIn == true)
                          // this.$router.push({ path: '/list' })
                            this.$store.dispatch('setRouting', 'listFiles')
                        })
                    
                    }
                    

                } 
     

        },
        created() {
          // if(this.$route.query['loginError']) {
          //   this.$store.dispatch('setError', 'Please log in to access page')
          // } else if (this.$store.getters.isUserLoggedIn) {
          //   this.$router.push({ path: '/list' })
          // },
          
          
        }
    

        
    } 
</script>
