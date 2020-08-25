<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registration form</v-toolbar-title>
              
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="email" prepend-icon="person" name="email" label="E-mail" type="email"
                  :rules="emailRules" required 
                  ></v-text-field>
                  <v-text-field v-model="password" :counter="16" prepend-icon="lock" name="password" label="Пароль" type="password"
                  :rules="passwordRules"
                  ></v-text-field>
                   <v-text-field v-model="confirmPassword" :counter="16" prepend-icon="repeat" name="confirm-password" label="Потвердите Пароль" type="password"
                  :rules="confirmPasswordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onSubmit"
                :disabled="!valid"
                >Регистрация</v-btn>
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
                confirmPassword: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules:[
                    v => !!v || 'Требуется пароль',
                    v => (v && v.length >= 6) || 'Пароль желательно более 6 символов'
                ],
                confirmPasswordRules:[
                    v => !!v || 'Требуется пароль',
                    v => v === this.password || 'Пароли не совпадают'
                ]
            }

        },
        methods:{
                onSubmit(){
                    if(this.$refs.form.validate()){
                        const user = {
                            email: this.email,
                            password: this.password
                        }
                        this.$store.dispatch('registerUser', user)
                        setTimeout(() => {
                          this.$router.push({ path: '/list' }) 
                        }, 500)
                        console.log(user);
                
                    }
                
                
                }
     

            }
    

        
    } 
</script>
