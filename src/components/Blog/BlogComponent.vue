<template>
  <div id="blogs">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br /><br /><br />     
    <v-row align="center" justify="center">
      <v-col cols="9">
        <v-container class="white lighten-5 hidden">
          <v-row   >
            <v-col v-for="n in 6" :key="n" cols="12" sm="4">
              <v-card class="rounded-xl">

                <v-card max-width="100%">
                  
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">  
                  
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>
                

                  <v-card-subtitle class="pb-0">
                    Number 10
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="orange" text>
                      Share
                    </v-btn>

                    <v-btn color="orange" text>
                      Explore
                    </v-btn>
                  </v-card-actions>
                </v-card>

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
    navigation,
  },
};
</script>

<style lang="scss" scoped></style>
