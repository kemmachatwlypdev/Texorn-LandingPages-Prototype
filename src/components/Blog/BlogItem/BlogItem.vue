<template>
  <div id="blogs">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br /><br />
    <v-row no-gutters justify="center">
      <v-col align="start" cols="10">
        <div>
          <h1>
            What is RPA ?
          </h1>
         
          <v-row>
            <v-col md="12">
              <img src="./BlogItemIMG/Robotic_process_automation-1108451648.png" alt="RPA" width="90%" style="float: left;" />
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              quo natus non quaerat hic. Minima, dicta neque aperiam fuga sequi
              recusandae perspiciatis, autem explicabo sapiente, excepturi odio
              voluptas voluptatem deleniti! <br>Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nostrum quo natus non quaerat hic.
              Minima, dicta neque aperiam fuga sequi recusandae perspiciatis,
              autem explicabo sapiente, excepturi odio voluptas voluptatem
              deleniti!
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

export default {
  components: {
    navigation,
  },
};
</script>

<style lang="scss" scoped>
</style>
