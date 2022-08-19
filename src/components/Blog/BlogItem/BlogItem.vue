<template>
  <div id="blogs">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br /><br />
    <v-row no-gutters justify="center" v-bind="this.blogsdata[id]">
      <v-col align="start" cols="10">
        <div>
          <button @click="showindex">Press log</button>
          <h1>
            {{blogs[id-1].topics}}
          </h1>
          <!-- <router-link :to="'/blogsitem/' + blog.id">Test Link</router-link> -->
          <v-row>
            <v-col md="12">
              <img
                src="./BlogItemIMG/Robotic_process_automation-1108451648.png"
                alt="RPA"
                width="90%"
                style="float: left;"
              />
              <a href="https://www.facebook.com/">
                <v-btn
                  style="color: black; box-shadow: none; background-color: white; position: fixed;"
                  class="mt-8"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn> </a
              ><br /><br />
              <v-btn
                style="color: black; box-shadow: none; background-color: white; position: fixed;"
                dark
                v-bind="attrs"
                v-on="on"
                class="mt-8"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <br />
          <br />
          <div class="text-align: center">
            <article>{{blogs[id-1].article}}</article>
          </div>
        </div>
        <div class="col-md-5" id="youtubeEmbed">
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
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import navigation from "../NavigationBlogs.vue";
import blogsData from "@/components/Blog/BlogItem/dataBlogs/data.json";
import axios from "axios";


export default {
  components: {
    navigation,
  },
  data(){
    return{
      blogsdata:[],
      id:'',
      blogs: blogsData,
    }
  },
  mounted(){
    this.id=this.$route.params.id;
    axios.get('src\components\Blog\BlogItem\dataBlogs\data.js').then((response) => {
      this.blogsdata=response.data
      console.log(response.data)
    });
  },
  // watch:{
  //   $route{
  //     this.blogsdata.id = $route.params.id;
  //   }
  // },
  methods:{
    showindex(){
      // const index=this.blogsdata.map(obj => obj.id)
      // const topics=this.blogsdata.map(obj => obj.topics)
      const id=this.$route.params.id
      console.log()
      // console.log(this.blogsdata[index[0]].topics)
    }
    // const index=this.blogsdata.map(obj => obj.id)
    // showconsole(){
    //   console.log(this.blogsdata[1].topics);
    // }
  }
};
</script>

<style lang="scss" scoped></style>
