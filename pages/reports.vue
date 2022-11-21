<template >
    <div>
        <div class="blue--text text-h5 text-center mb-5">Reports</div>

        <v-row>
            <v-col cols="12" md="6" sm="12" class="mx-auto">
               <v-select placeholder="Choice reports" dense rounded outlined :items="reports" required>
               </v-select>
            </v-col>
        </v-row>
        
    </div>
</template>
<script>
export default {
    data() {
        return{
             reports : ['Products', 'Orders Products'],
        }
    },
    name:'Reports'
}
</script>
