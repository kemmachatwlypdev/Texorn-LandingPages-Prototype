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
            <v-col v-for="(item, n) in blogslength" :key="n" cols="12" md="4">
              <v-hover v-slot="{ hover }">
                <v-card class="rounded-xl">
                  <v-card max-width="100%" class="disborder">
                    <v-img :aspect-ratio="16 / 9" class="white--text align-end" height="100%"
                      v-bind:src="getImg(blogsdt[n].image)">
                      <v-expand-transition>
                        <div v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-p2 white--text px-8"
                          style="height: 100%;">{{ blogsdt[n].descrip}}
                        </div>
                      </v-expand-transition>
                      <!-- Can't Dynamic [n] -->
                    </v-img>

                    <!-- src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" -->


                  </v-card>

                  <v-card max-width="100%" height="95px" class="disborder">
                    <v-card-title class="black--text align-end" height="10%" style="color:black">{{ blogsdt[n].title }}
                    </v-card-title>
                    <v-card-text class="text--primary">
                      <div>{{ blogsdt[n].createdAt }}</div>
                    </v-card-text>
                    <!-- <v-card-text class="text--primary">
                    <div>{{ blogsdt[n].descrip}}</div>
                  </v-card-text> -->
                  </v-card>
                  <v-card max-width="100%" height="50px" class="disborder">

                    <v-btn style="margin-right: 15px;float: right;margin-top: 6px;" color="orange" @click="gopath()">
                      Share
                    </v-btn>

                    <v-btn style="float: right;margin-top: 6px;" color="orange" text
                      v-bind:href="'/blogsitem/' + blogsdt[n].id">
                      Explore
                    </v-btn>

                  </v-card>
                </v-card>
              </v-hover>
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

<style lang="scss" scoped>
.disborder {
  border-radius: 0px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}

#blogs{
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background: url("~@/assets/img/bgMain.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
