<template>
  <div id="blogs">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br />
    <v-row align="center" justify="center">
      <v-col cols="9">
        <v-container class="white lighten-5 hidden">
          <v-row>
            <v-col v-for="(item, n) in blogslength" :key="n" cols="12" sm="4">
              <v-card class="rounded-xl">
                <v-card max-width="100%">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    v-bind:src="getImg(blogsdt[1].image)" 
                  >
                  <!-- Can't Dynamic [n] -->
                    <v-card-title style="color:white">{{ blogsdt[n].topics }}</v-card-title>
                  </v-img>
                  <!-- src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" -->
                  <v-card-subtitle class="pb-0">
                    {{ n }}<br />
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>{{ blogsdt[n].article}}</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions justify="end">
                    <v-btn color="orange" @click="gopath()">
                      Share
                    </v-btn>

                    <v-btn color="orange" text href="/blogsitem/1">
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
    <foote />
  </div>
</template>

<script setup>
import navigation from "./NavigationBlogs.vue";
import blogsData from "@/components/Blog/BlogItem/dataBlogs/data.json";
import blogs from "./BlogItem/dataBlogs/data";
import { required } from "vee-validate/dist/rules";
import foote from "@/components/Footer";
export default {
  components: {
    navigation,
    foote
  },
  data() {
    return {
      linkpath: "/blogsitem",
      blogsdt: blogsData,
      blogslength: blogsData.length,
      // obj: JSON.parse(blogsData),
      // length: Object.keys(obj).length,
    };
  },
  methods: {
    incrementIndex(n) {
      return n + 1;
    },
    gopath() {
      // const index=this.blogsdata.map(obj => obj.id)
      // const topics=this.blogsdata.map(obj => obj.topics)
      console.log(blogslength);
      // window.location.href = "/blogsitem/"+1;
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
