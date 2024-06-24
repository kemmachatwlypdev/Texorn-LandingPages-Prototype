<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>   
          <v-list-item-avatar>
           <a href="/" no-caps flat color="primary">
          <v-img src="@/assets/img/logo.png" max-width="10%" class="mt-1" />
        </a>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Texorn</v-list-item-title>
            <v-list-item-subtitle>Digital Solution</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>

        <router-link to="/" class="text-decoration-none">
          <v-list-item>
            <v-list-item-icon class="justify-center text-decoration-none">
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="subtitile-1 white--text text-decoration-none"
              >
                Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/blogs" class="text-decoration-none">
          <v-list-item>
            <v-list-item-icon class="justify-center text-decoration-none">
              <v-icon>mdi-post-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="subtitile-1 white--text text-decoration-none"
              >
                Blogs
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <!-- <v-btn href="/blogs" style="display:flex; background-color: transparent;">Blogs</v-btn> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="'#171b34'"
      :flat="flat"
      dark
      class="px-0"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <a href="/" no-caps flat color="primary">
          <v-img src="@/assets/img/logo.png" max-width="11%" class="ml-2" />
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-0"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text href="/">
          <span class="mr-3"
            ><span class="material-icons"> arrow_back </span></span
          >
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-list-item:hover {
  background-color: black;
}

.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [[]],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
