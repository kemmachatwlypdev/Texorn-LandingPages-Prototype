<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary dark src="@/assets/img/bgDrawer.jpg">
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
        <v-list-item v-for="([icon, text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
                text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <router-link to="/blogs" class="text-decoration-none">
          <v-list-item>
            <v-list-item-icon class="justify-center text-decoration-none">
              <v-icon>mdi-post-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="subtitile-1 white--text text-decoration-none">
                Blogs
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <!-- <v-btn href="/blogs" style="display:flex; background-color: transparent;">Blogs</v-btn> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :color="color" :flat="flat" dark class="px-0" :class="{ expand: flat }">
      <v-toolbar-title>
        <a href="/" no-caps flat color="primary">
          <v-img src="@/assets/img/logo.png" max-width="11%" class="ml-2" />
        </a>

      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-0" v-if="isXs" />
      <div v-else>
        <v-btn text href="/">
          <span class="mr-0">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-0">About</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-0">Academic</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#pricing')">
          <span class="mr-0">Services</span>
        </v-btn>
        <v-btn text href="/blogs" target="_blank">
          <span class="mr-0">Blogs</span>
        </v-btn>
        <v-btn rounded text:true @click="$vuetify.goTo('#contact')">
          <span class="mr-0">Contact</span>
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
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "About", "#features"],
      ["mdi-download-box-outline", "Academic", "#download"],
      ["mdi-currency-usd", "Services", "#pricing"],
      ["mdi-email-outline", "Contact", "#contact"]
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 1025;
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
