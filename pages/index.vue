<template>
  <div>
    <div class="jumbotron">
      <div class="fixed">
        <div class="bg">
          <div class="text">
            <p>Hello!</p>
            <vue-typed-js
              class="coding"
              :strings="strings"
              :typeSpeed="30"
              :backSpeed="10"
              cursorChar="_"
            >
              <pre><code>> <span class="typing"></span></code></pre>
            </vue-typed-js>
            <!-- <vue-typer :text="['Moiz', 'A Developer']"></vue-typer> -->
          </div>
        </div>
        <SocialBar class="socialbar" />
      </div>
    </div>
    <div class="second">
      <section class="about">
        <v-container class="d-flex flex-row">
          <div>
            <v-card elevation="2" class="about-image">
              <v-img
                src="/moiz.jpg"
                height="400"
                class="jarallax grey darken-4"
              ></v-img>
            </v-card>
          </div>
          <v-container
            class="about-text"
            v-rellax="{
              speed: safeSpeed(-2.2),
            }"
          >
            <h2 class="text-h3 mb-5">Hi! I am Moiz Sohail</h2>
            <p class="text-body-1 mt-5">
              Thought I should get myself a nice place to share my projects. So
              here it is. If you like my works hit me up and then we can work on
              something great together.
            </p>
            <h2 class="text-h5 mb-5">Contact Me Here</h2>
            <div class="about-contact mt-5">
              <p class="text-body-1">
                Email: &nbsp;
                <a class="link" href="#">moizsohail@live.co.uk</a>
              </p>
              <p class="text-body-1">
                Phone: &nbsp;
                <a class="link" href="#">0330 263 5070</a>
              </p>
            </div>
            <v-btn elevation="2" class="mt-4"
              ><a class="cvtext" href="/moiz.pdf" target="__blank"
                >Download CV</a
              ></v-btn
            >
          </v-container>
        </v-container>
      </section>
      <section class="portfolio">
        <div class="portfolio-title">
          <h2 class="text-overline" v-rellax="{ speed: 0 }">Portfolio</h2>
          <h2 class="text-h3" v-rellax="{ speed: 0 }">
            Checkout a few of my projects
          </h2>
        </div>
        <div class="project">
          <v-container
            v-for="(x, i) in portfolio"
            :key="x.title"
            class="d-flex flex-row"
            :class="{ 'flex-row-reverse': i % 2 }"
          >
            <v-card
              elevation="2"
              class="about-image darken rellax"
              :style="{ 'margin-top': i * 50 + 100 + 'px' }"
              v-rellax="{ speed: safeSpeed(1.5), 'mobile-speed': 0 }"
            >
              <v-img
                :src="`https://picsum.photos/1024/1024?random=${i}`"
                height="400"
                width="400"
                class="grey darken-4"
                ><template v-slot:placeholder>
                  <v-skeleton-loader
                    type="image,image,image"
                    min-height="400"
                  /> </template
              ></v-img>
            </v-card>
            <v-container
              class="about-text"
              :class="{ left: !(i % 2) }"
              v-rellax="{ speed: safeSpeed(-0.5), 'mobile-speed': 0 }"
            >
              <h2 class="text-overline" v-rellax="{ speed: 0 }">
                {{ x.head }}
              </h2>
              <h2 class="text-h3 mb-5">{{ x.title }}</h2>
              <p class="text-body-1 mt-5">
                {{ x.description }}
              </p>
              <div class="about-contact mt-5">
                <p class="text-body-1">
                  <nuxt-link class="link" to="/portfolio">View More</nuxt-link>
                </p>
              </div>
            </v-container>
          </v-container>
        </div>
      </section>
      <section class="capabilities" v-rellax="{ speed: 0 }">
        <Services />
      </section>
      <section v-rellax="{ speed: 0 }" class="contact">
        <h1 class="text-h1">Let's Make Something Great Together</h1>

        <h3 class="text-h3">moizsohail@live.co.uk</h3>
      </section>
    </div>
  </div>
</template>
<script>
import SocialBar from '~/components/socialbar'
import Services from '~/components/Service'

export default {
  components: {
    SocialBar,
    Services,
  },
  head: {
    title: 'Moiz Sohail',
    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: 'Make it work, make it right, make it fast.',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
      },
    ],
  },
  data() {
    return {
      rellax: {
        speed: -0.5,
      },
      portfolio: [
        {
          head: 'Startup',
          title: 'Vlancer',
          description:
            'A freelancing platform for university students to make some extra bucks.',
          link: '#',
          img: '',
        },
        {
          head: 'Android',
          title: 'DementiaCare+',
          description:
            "Pakistan's first ever assistant for dementia caretakers.",
          link: '#',
          img: '',
        },
        {
          head: 'Tensorflow',
          title: 'MemeCleaner',
          description:
            'No more full storage and no more sitting on your phone for hours cleaning up you gallery. Meme cleaner does it for you',
          link: '#',
          img: '',
        },
      ],
    }
  },
  computed: {
    safeSpeed() {
      return (speed) => {
        if (process.client) {
          const width = window.innerWidth
          if (width < 800) {
            return 0
          }
        }
        return speed
      }
    },
    strings() {
      if (process.client) {
        const width = window.innerWidth
        console.log(width)
        if (width < 400) {
          return [
            'World!',
            "I'm Moiz ",
            'I love \n Programming ',
            'I like \n making \n Websites \n and Apps',
            'I like \n automating \n stuff',
            "Let's Get \n Started",
          ]
        } else if (width < 800) {
          return [
            'World!',
            "I'm Moiz ",
            'I love \n Programming ',
            'I like making \n Websites and Apps',
            'I like \n automating stuff',
            "Let's Get Started",
          ]
        } else
          return [
            'World!',
            "I'm Moiz ",
            'I love Programming ',
            'I like making Websites and Apps',
            'I like automating stuff',
            "Let's Get Started",
          ]
        // ... mobile { ... styles }
        // ... desktop { ... styles }

        // ... if width is less than 700, return mobile
        // ... if width greater than 700, return desktop
      } else {
        return ['']
      }
    },
  },
}
</script>
<style>
.vue-typer .custom.char {
  color: white;
  font-size: 45px;
  font-weight: 600;
}

.v-application code {
  color: white;
  font-family: monospace;
  background: unset;
  font-size: 32px;
  font-weight: 500;
}
.text-overline {
  color: rgba(255, 255, 255, 0.562);
}
.vue-typer .custom.caret {
  font-size: 45px;
  width: 3px;
  background-color: white;
}

.v-toolbar {
  background: transparent !important;
}
</style>

<style scoped>
.socialbar {
  position: absolute;
  left: 0px;
  bottom: 0px;
}

.about-image {
  width: 300px;
}

.project {
  padding: 200px 0px 0px;
}
.darken :before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.068);
  top: 0;
  left: 0;
}

.project .flex-row {
  padding: 0px 0px 0px;
}
.about-contact .text-body-1 {
  margin: 0px;
  padding: 0px;
}
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
  min-height: 98vh;
  /* padding: 380px 100px 380px 100px; */
}
.capabilities {
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.596);
  padding: 100px 100px 150px 100px;
  margin-top: -200px;
}
.capabilities .bgtext {
  /* position: absolute; */
  color: transparent;
  font-weight: normal;
  font-family: 'futuraheavy';
  letter-spacing: 3px;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
  line-height: 220px;
}
.contact h1 {
  color: #f6f7fb;
  font-size: 50px !important;
  font-family: 'futurabook' !important;
  line-height: 55px;

  letter-spacing: 1px;
  font-weight: normal;
  max-width: 542px;
  width: 100%;
  margin: 0 auto 30px;
}
.contact h2 {
  font-weight: 700;
  font-size: 2rem !important;
  font-family: 'futurabook' !important;
}

.cvtext {
  color: white;
}
i {
  transition: 0.4s ease;
  cursor: pointer;
}

.contact h3 {
  font-weight: 400;
  font-family: 'futurabook' !important;

  font-size: 1.75rem !important;
}
.portfolio-title .text-overline {
  text-align: center;
}
.text-body-1 {
  color: rgba(255, 255, 255, 0.562);
}
.portfolio-title .text-h3 {
  font-family: 'futurabook' !important;
}
.portfolio-title {
  text-align: center;
  margin-top: 10px;
  padding: 150px 0px 0px;
}
.about-contact .text-body-1 a {
  color: #2f89fc;
  text-decoration: none;
}
.left {
  margin-left: -100px !important;
}
.about-text {
  margin-top: -30px;
  padding-right: 150px;
  margin-left: 100px;
}

.about {
  padding: 200px 100px 50px 100px;
}
.portfolio {
  padding: 50px 100px 0px 100px;
}

.fixed {
  position: fixed;
}
.bg {
  width: 100vw;
  height: 100vh;

  background: #000 url('~assets/images/DSC_0435.jpg') no-repeat fixed top left;
  background-size: cover;
}
.second:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.999);
  top: 0;
  left: 0;
}
.bg:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
}

.jumbotron {
  height: 100vh;
  position: relative;
}
.second {
  position: relative;
  background: #171819
    url('https://wallpaperhunt.net/save/wallpaper?f=24577-4k-minimalist-wallpaper-3840x2160-158074280832820.jpg')
    no-repeat fixed top;
  background-size: cover;
}

.text p {
  font-size: 58px;
  margin: 0px;
}
.text {
  z-index: 1;
  margin: 35vh 80px;
  position: absolute;
  background: transparent;
}
@media screen and (max-width: 400px) {
  .about-image {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 750px) {
  .text {
    margin: 35vh 15px;
  }
  .socialbar {
    bottom: 7vh;
  }
  .capabilities {
    margin-top: 0px;
    padding: 100px 20px 150px 20px;
  }
  .about {
    padding: 200px 20px 50px 20px;
  }
  .portfolio {
    padding: 50px 20px 0px 20px;
  }

  .contact h1 {
    font-size: 40px !important;
  }
  .portfolio .flex-row,
  .about .flex-row {
    flex-direction: column !important;
  }
  .about-text {
    padding: 0px;
    margin: 0px;
  }
  .left {
    margin: 0px !important;
  }
  .project .text-h3 {
    font-size: 2.5rem !important;
  }
  section {
    position: relative;
  }
}
</style>
