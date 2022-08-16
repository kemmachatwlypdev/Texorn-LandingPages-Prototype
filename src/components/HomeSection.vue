<template>
  <section id="hero">
    <v-parallax dark src="@/assets/img/bgHeroG3.png" height="1024">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4 mt-16">Texorn Digital Solution</h1>
              <h3 class="font-weight-bold">
                We are a Startup company that is committed to developing <br />
                Automation and Innovation that is different answer and the question <br />
                That will help make doing business easy.
              </h3>
              <div class="video d-flex align-center py-0 mt-2">
                <a @click.stop="dialog = true" class="playBut">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="60px"
                    height="60px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                    xml:space="preserve">
                    <polygon class="triangle" id="XMLID_18_" fill="none" stroke-width="7" stroke-linecap="round"
                      stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 " />

                    <circle class="circle" id="XMLID_17_" fill="none" stroke-width="7" stroke-linecap="round"
                      stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3" />
                  </svg>
                </a>
                <p class="subheading ml-2">Watch the video</p>
              </div>


              <v-menu :rounded="rounded" top center>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn style="color: black;background-color: white;" rounded outlined large dark v-bind="attrs"
                    v-on="on" class="mt-8">

                    More information
                    <v-icon class="ml-2">mdi-arrow-right</v-icon>
                  </v-btn>
                </template>
                <br><br><br>
                <div class="overflow-hidden">
                  <v-menu__content class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                      <h4 text class="text-justify-end rounded-t-xl px-8 py-10 font-weight-light "
                        style="color: white ;background-color: darkslategray;">
                        Tasks performed by the Minimally Qualified Candidate:
                        UiPath Studio
                        • Identify and describe how UI Automation activities and/or Excel activities (Classic design
                        experience) can be configured to interact with background windows
                        • Describe how to use state machines versus flowcharts and sequences
                        • Describe how to use and configure Activity Project Settings and Classic Libraries
                        UiPath Studio Activities and Properties
                        • Identify and describe how activities are used to automate actions in Excel, e-mail, and .pdfs
                        • Differentiate between input methods in the Classic design experience
                        • Identify and describe the key Classic UI Activities' properties; for example, ContinueOnError,




                      </h4>
                      <h1 text class="text-end col-12 font-weight-light  "
                        style="color: white;background-color: black;">
                        <!-- <v-btn text href="/blogs" target="_blank"> -->
                        <v-btn text @click="$vuetify.goTo('#features')">
                          <span class="mr-0" style="color: white;">about</span>
                        </v-btn>

                      </h1>
                    </div>
                  </v-menu__content>
                </div>

              </v-menu>

            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <!-- <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </v-col> -->
            <v-col cols="12" sm="4" class="text-center" v-for="(feature, i) in features" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-card class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover }">
                  <v-img :src="feature.img" max-width="100px" class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <youtube :video-id="videoId" @ready="ready" @playing="playing"></youtube>
      </v-card>
    </v-dialog>
    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Robotics",
          text: "AI software robot which can mimic human perform to do the tasks",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Process",
          text: "Verifiable progression and ability to handle alot of process in a day ",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: " Automation",
          text: "END-TO-END automation which less time take and more benifits",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }

        30% {
          transform: translateX(-5px);
        }

        50% {
          transform: translateX(5px);
        }

        70% {
          transform: translateX(-2px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}

.v-menu>.v-menu__content {
  max-width: none;

}

.v-menu__content {
  position: absolute;
  display: inline-block;
  max-width: 80%;
  overflow-y: hidden;
  overflow-x: hidden;
  contain: content;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

.v-menu {
  display: none;
  max-width: 30%;
}
</style>

<style>
section {
  position: relative;
}
</style>

