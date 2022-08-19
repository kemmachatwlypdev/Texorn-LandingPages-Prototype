<template>
  <div id="app">
    <h1>{{blogs[0].topics}}</h1>
    <!-- <ul>
      <li v-for="blog in blogs" :key="blog.id[0]">
         {{blog.topics}}<br>
         {{blog.article}}
       </li>
    </ul> -->
  </div>
</template>

<script>
import blogsData from "@/components/Blog/BlogItem/dataBlogs/data.json";

export default {
  data() {
    return {
      blogs: blogsData,
    };
  },
};
</script>

  methods:{
    showindex(){
      // const index=this.blogsdata.map(obj => obj.id)
      // const topics=this.blogsdata.map(obj => obj.topics)
      const id=this.$route.params.id
      console.log(id);
      console.log(blogsjson[id-1].topics)
      console.log(blogsjson[id-1].article)
      // console.log(this.blogsdata[index[0]].topics)
    }