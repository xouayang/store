<template>
  <div>
    <div class="mb-3 mt-5">
      <v-btn color="primary" @click="dialog = !dialog">
        <div class="white--text">Create User</div>
        <v-icon class="pl-4">mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-dialog v-model="dialogUser">
         <v-card>
           <!-- <v-card-title>{{showUser.first_name}}</v-card-title> -->
          </v-card>  
      </v-dialog>
      <v-dialog
        v-model="dialog"
        persistent
        overlay-opacity="0.5"
        max-width="540"
      >
        <v-card class="pb-4">
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = !dialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Create User </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn text @click="dialog = !dialog"> Save </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card class="mx-auto" max-width="800" elevation="0">
            <v-card-text>
              <div class="blue--text text-h5 mb-2">Create User</div>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    placeholder="firstname"
                    label="Firstname"
                    dense
                    outlined
                    hide-details="auto"
                    append-icon="mdi-account-outline"
                  />
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field
                    placeholder="lastname"
                    label="Lastname"
                    dense
                    outlined
                    hide-details="auto"
                    append-icon="mdi-account-outline"
                  />
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field
                    placeholder="address"
                    label="Address"
                    dense
                    outlined
                    hide-details="auto"
                    append-icon="mdi-map-marker-outline"
                  />
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field
                    placeholder="email"
                    label="Email"
                    type="email"
                    dense
                    outlined
                    hide-details="auto"
                    append-icon="mdi-email-outline"
                  />
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field
                    placeholder="password"
                    label="Password"
                    dense
                    outlined
                    hide-details="auto"
                  >
                    <template #append>
                      <v-btn icon small class="pb-1">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card>
      </v-dialog>
      <v-spacer />
      <v-spacer />
    </div>
    <v-spacer />
    <div class="mt-8">
      {{singleUser}}
      <!-- {{ options }} -->
      <v-card-title>Manage User</v-card-title>
      <v-data-table
        :headers="tableHeaders"
        :items="mapUser.data"
        :items-per-page="5"
        :options.sync="options"
        :server-items-length="mapUser.total"
        dense
      >
        <template #[`item.action`]>
          <v-tooltip top color="error">
            <template #activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="error">mdi-trash-can-outline</v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>
          <v-tooltip top color="primary">
            <template #activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="primary" @click="dialogUser = !dialogUser">mdi-pencil-outline</v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
          </v-tooltip>
          <v-tooltip top color="info">
            <template #activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="info">mdi-reload</v-icon>
              </v-btn>
            </template>
            <span>Reset Password</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Users',
  data() {
    return {
      options: {},
      dialog: false,
      dialogUser:false,
      tableHeaders: [
        {
          text: 'UserID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        // { text: 'avatar', value: 'avatar' },
        { text: 'Firstname', value: 'first_name' },
        { text: 'Lastname', value: 'last_name' },
        // { text: 'Address', value: 'Address' },
        { text: 'Email', value: 'email' },
        // { text: 'Password', value: 'Password' },
        { text: '', value: 'action' },
      ],
    }
  },
  computed: {
    mapUser() {
      return this.$store.state.user.showUser
    },
    singleUser() {
      return this.$store.state.user.singleUser
    }
  },
  watch: {
    options(value) {
      const { page, itemPerpage } = value
      this.$store.dispatch('user/getUser', { page, per_page: itemPerpage })
    },
  },
  async mounted() {
    await this.$store.dispatch('user/singleUser')
  },
  
}
</script>