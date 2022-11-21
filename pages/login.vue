<template>
  <div>
    <v-card max-width="500" class="mx-auto pa-4 mt-12">
      <v-row>
        <v-col cols="12" sm="12" class="mx-auto">
          <v-form>
            <v-text-field
              label="Email"
              placeholder="email"
              dense
              outlined
              hide-details="auto"
              v-model="user.email"
            />
          </v-form>
        </v-col>
        <v-col cols="12" sm="12" class="mx-auto">
          <v-text-field
            :type="hidePassword ? 'text' : 'password'"
            label="Password"
            placeholder="password"
            dense
            outlined
            hide-details="auto"
            v-model="user.password"
          >
            <template #append>
              <v-btn icon @click="hidePassword = !hidePassword">
                <v-icon class="pb-2">{{
                  hidePassword ? 'mdi-eye' : 'mdi-eye-off'
                }}</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
        <v-card-actions>
          <v-btn class="success" @click="onLogin">login</v-btn>
          <v-btn class="error">cancel</v-btn>
        </v-card-actions>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: 'blank',
  middleware: 'unauth',
  hidePassword: false,
  data() {
    return {
      valid: true,
      hidePassword: false,
      user:{
        email:'',
        password:''
      }
    }
  },
  methods: {
    onLogin() {
      this.$store.dispatch('user/login')
    },
  },
}
</script>