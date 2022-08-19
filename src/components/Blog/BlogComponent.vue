<template>
  <div id="blogs">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br /><br /><br />
    <v-row align="center" justify="center">
      <v-col cols="9">
        <v-container class="white lighten-5 hidden">
          <v-row>
            <v-col v-for="n in blogslength" :key="n" cols="12" sm="4">
              <v-card class="rounded-xl">
                <v-card max-width="100%">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-card-title>{{blogsdt[0].topics}}</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    {{n}}<br>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions justify="end">
                    <v-btn color="orange" @click="gopath()">
                      Share
                    </v-btn>

                    <v-btn color="orange" text href="/blogsitem/">
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
import blogsData from "@/components/Blog/BlogItem/dataBlogs/data.json";
import blogs from "./BlogItem/dataBlogs/data";

export default {
  components: {
    navigation,
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
    gopath() {
      // const index=this.blogsdata.map(obj => obj.id)
      // const topics=this.blogsdata.map(obj => obj.topics)
      console.log(blogslength);
      // window.location.href = "/blogsitem/"+1;
    },
    // const index=this.blogsdata.map(obj => obj.id)
    // showconsole(){
    //   console.log(this.blogsdata[1].topics);
    // }
  },
};
</script>

<style lang="scss" scoped></style>
