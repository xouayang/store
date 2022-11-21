<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <div class="blue--text text-h6 text-center mb-6">
          Order Details Products
        </div>
        <v-card class="d-flex mx-auto" max-width="850">
          <div class="pa-1">
            <v-img
              src="https://api.olaa.la/Files/VBR01BlackheadRemoverVisual_CV_07er.jpg"
              width="110"
              height="110"
            />
            <v-card-text>Brand : VBR-01 Blackhead Remover </v-card-text>
          </div>
          <v-spacer />
          <div class="pe-4 pt-2">
            <div v-text="'Order Date : ' + $moment().format('LLL')"></div>
            <div>Customer Name: XAYSOMBOUN</div>
            <div>Amount : <span class="red--text">3</span></div>
            <div>Total Price : <span class="red--text">K 100,000</span></div>
            <v-card-actions class="mt-2">
              <v-btn block color="success" @click="comfirmOrder"
                >Comfirm Orders</v-btn
              >
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showTimeline: false,
    }
  },
  methods: {
    comfirmOrder() {
      this.$toast.success('Comfirm Success', {
        position: 'bottom-right',
        duration: 1000,
        iconPack: 'mdi',
        icon: 'mdi-check-outline',
      })
    },
  },
  name: 'orderPages',
}
</script>
