<template>
  <div id="blogs">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br /><br />
    <v-row no-gutters justify="center" v-for="blog in blogsdata" :key="blog.id">
      <v-col align="start" cols="10" >
        <div>
          <h1>
            {{blog.topics}}
          </h1>
         <router-link :to="'/blogsitem/' + blog.id">Test Link</router-link>
          <v-row>
            <v-col md="12">
              <img v-bind:src="blog.imagesrc" alt="RPA" width="90%" style="float: left;" />
             <a href="https://www.facebook.com/">
                <v-btn style="color: black; box-shadow: none; background-color: white; position: fixed;"
                  class="mt-8">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </a><br><br>
              <v-btn style="color: black; box-shadow: none; background-color: white; position: fixed;" dark
                v-bind="attrs" v-on="on" class="mt-8">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <br />
          <br />
          <div class="text-align: center">
            <article>
              {{blog.article}}
            </article>
          </div>
        </div>
        <div class="col-md-5" id="youtubeEmbed">
          <br />
          <iframe width="100%" height="350" src="https://www.youtube.com/embed/9URSbTOE4YI" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import navigation from "../NavigationBlogs.vue";
import blogs from "./dataBlogs/data.js";

export default {
  components: {
    navigation,
  },
  data(){
    return{
      blogsdata:blogs
    }
  }
};

</script>

<style lang="scss" scoped>
</style>
