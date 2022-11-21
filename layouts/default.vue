<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
    >
      <v-list rounded>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="primary"
        >
          <v-list-item-action>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-toolbar-title>{{ title }}</v-toolbar-title> -->
      <v-spacer />
      <v-text-field
        label="search"
        placeholder="Search"
        outlined
        rounded
        dense
        small
        class="mt-6"
        append-icon="mdi-magnify"
      ></v-text-field>

      <v-spacer />
      <div></div>
      <div>
        <v-menu v-model="showProfile" max-width="500" offset-y>
          <template #activator="{ on, attrs }">
            <v-btn color="primary"  fab small dark v-bind="attrs" v-on="on">
              <v-badge dot overlap color="success">
                <v-btn icon>
                  <v-icon color="white">mdi-account-outline</v-icon></v-btn
                >
              </v-badge>
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item link>
                <v-btn icon color="primary"
                  ><v-icon>mdi-account-outline</v-icon></v-btn
                >
                <v-card-text>Account Info </v-card-text>
              </v-list-item>
              <v-list-item link>
                <v-btn icon color="primary"
                  ><v-icon>mdi-cog-outline</v-icon></v-btn
                >
                <v-card-text>Settings </v-card-text>
              </v-list-item>
              <v-list-item link>
                <v-btn icon color="primary"
                  ><v-icon>mdi-bell-outline</v-icon></v-btn
                >
                <v-card-text>Notifications </v-card-text>
              </v-list-item>
              <v-list-item link @click="logout">
                <v-btn icon color="primary"><v-icon>mdi-power</v-icon></v-btn>
                <v-card-text>Logout </v-card-text>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware:'auth',
  data() {
    return {
      selectedItem: 1,
      showProfile: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-account-details-outline',
          title: 'Admin',
          to: '/admin-page',
        },
        {
          icon: 'mdi-account-plus-outline',
          title: 'Users',
          to: '/Users',
        },
        {
          icon: 'mdi-shopping-outline',
          title: 'Produts',
          to: '/products',
        },
        {
          icon: 'mdi-cart-outline',
          title: 'Order Products',
          to: '/order',
        },
        {
          icon: 'mdi-export',
          title: 'Exports',
          to: '/Exports',
        },
        {
          icon: 'mdi-chart-donut',
          title: 'Reprots',
          to: '/Reports',
        },
        {
          icon: 'mdi-contacts-outline',
          title: 'Contacts',
          to: '/Contact',
        },
      ],
      profile: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
      miniVariant: false,
      title: 'Admin Dashboard',
    }
  },
  methods:{
    logout() {
      this.$cookies.remove('token')
      this.$router.push('/login')
    }
  }
}
</script>
