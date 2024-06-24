<template>
  <div id="blogs">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br /><br />
    <v-row no-gutters justify="start" v-bind="this.blogsdata[id]">
      <v-col align="start" cols="1">
        <a href="https://www.facebook.com/">
          <v-btn
            rounded-l-xl
            style="color: black; padding: 6px; box-shadow: none; background-color:whitesmoke; position: fixed; right: 0%; top:10%"
            class="mt-0"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn> </a
        ><br /><br />
        <v-btn
          style="color: black; box-shadow: none; background-color: whitesmoke; position: fixed; right: 0%; top:15% "
          dark
          v-bind="attrs"
          v-on="on"
          class="mt-0"
        >
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </v-col>
      <v-col align="start" cols="10" style="background-color: white;">
        <div>
          <!-- <button @click="showindex">Press log</button> -->
          <h1
            style=" h1 
           display: block;
           font-size: 3em;
           margin-block-start: 0em;
           margin-block-end: 0em;
           margin-inline-start: 0px;
           margin-inline-end: 0px;
           font-weight: bold; padding-left: 0px; color: black;"
          >
            {{ blogs[id - 1].title }}
          </h1>
          <div>
            <!-- <v-img class="rounded-circle" src="@/assets/img/writer.jpg" max-width="45" /><br> -->
            <p class="sc-edeore-7 eHwIng">Texorn Digital Solution • {{blogs[id-1].createdAt}}</p>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- <router-link :to="'/blogsitem/' + blog.id">Test Link</router-link> -->
    <v-row no-gutters justify="center" style="text-align-last: center;">
      <v-col align="start" cols="10">
        <v-row no-gutters>
          <v-col cols="12">
            <img
              v-bind:src="getImg(blogs[id - 1].image)"
              alt="RPA"
              width="90%"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <br />
    <br />

    <v-row no-gutters justify="center">
      <v-col align="start" cols="10">
        <v-row no-gutters>
          <v-col cols="12">
            <div class="text-align: center">
              <body-1
                style="
           display: block;
           font-size: 1.25em;
           margin-block-start: 0em;
           margin-block-end: 0em;
           margin-inline-start: 0px;
           margin-inline-end: 0px;
           "
              >
                <article>{{ blogs[id - 1].article }}</article>
              </body-1>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- <div class="col-md-5" id="youtubeEmbed">
          <br />
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/9URSbTOE4YI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div> -->
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <foote />
  </div>
</template>

<script setup>
import navigation from "../NavigationBlogs.vue";
import blogsData from "@/components/Blog/BlogItem/dataBlogs/data.json";
import axios from "axios";
import { required } from "vee-validate/dist/rules";
import foote from "@/components/Footer";

export default {
  components: {
    navigation,
    foote,
  },
  data() {
    return {
      blogsdata: [],
      id: "",
      blogs: blogsData,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    axios
      .get("src\components\Blog\BlogItem\dataBlogs\data.js")
      .then((response) => {
        this.blogsdata = response.data;
        console.log(response.data);
      });
  },
  // watch:{
  //   $route{
  //     this.blogsdata.id = $route.params.id;
  //   }
  // },
  methods: {
    // bindimage(src){
    //   const imgsrc=require(src)
    //   console.log(imgsrc)
    //   return imgsrc
    // },
    showindex() {
      // const index=this.blogsdata.map(obj => obj.id)
      // const topics=this.blogsdata.map(obj => obj.topics)
      const id = this.$route.params.id;
      // console.log(this.blogsdata[index[0]].topics)
    },
    getImg(img) {
      return require(`@/components/Blog/BlogItem/BlogItemIMG/${img}`);
    },
    // const index=this.blogsdata.map(obj => obj.id)
    // showconsole(){
    //   console.log(this.blogsdata[1].topics);
    // }
  },
};
</script>

<style lang="scss" scoped></style>
