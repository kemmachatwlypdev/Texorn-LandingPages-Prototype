<template>
  <div id="blogs">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br /><br /><br />
    <v-row align="center" justify="center">
      <v-col cols="9">
        <div>
          <h1>
            What is RPA ?
          </h1>
          <br />
          <img
            src="./BlogItemIMG/Robotic_process_automation-1108451648.png"
            alt="RPA"
            width="100%"
          />
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
          <div id="youtubeEmbed">
            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9URSbTOE4YI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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

<style lang="scss" scoped></style>
