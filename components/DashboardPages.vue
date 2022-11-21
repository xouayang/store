<template>
  <div>
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <v-card>
          <div class="d-flex">
            <v-btn color="deep-purple" fab class="ma-2">
              <v-icon color="white">mdi-account-group-outline</v-icon>
            </v-btn>
            <v-spacer />
            <div class="mt-3 me-6">
              <div class="">Total users</div>
              <div class="success--text text-center mt-1">741</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'DashboardPages',
}
</script>
