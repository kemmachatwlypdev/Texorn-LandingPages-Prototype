<template>
    <div id="blogs">
        <div>
        <navigation :color="color" :flat="flat" />
        </div><br><br><br><br>
          <v-row align="center" justify="center" >
        <v-col cols="9">
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 9"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-col>
  </v-row>
    </div>
</template>

<script setup>
import navigation from "./NavigationBlogs.vue";

export default {
    components: {
        navigation
    }
}
</script>

<style lang="scss" scoped>
</style>
