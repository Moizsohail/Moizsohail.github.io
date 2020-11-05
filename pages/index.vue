<template>
  <div>
    <div class="jumbotron">
      <div class="fixed">
        <div class="bg">
          <div class="text">
            <p>Hello! I'm</p>
            <vue-typer :text="['Moiz', 'A Developer']"></vue-typer>
          </div>
        </div>
      </div>
    </div>
    <div class="second">
      <section class="about">
        <v-container class="d-flex flex-row">
          <v-card
            elevation="2"
            class="about-image rellax"
            v-rellax="{ speed: 1 }"
          >
            <v-img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              height="400"
              class="grey darken-4"
            ></v-img>
          </v-card>
          <v-container class="about-text" v-rellax="{ speed: -0.5 }">
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
            <v-btn elevation="2" class="mt-4">Download CV</v-btn>
          </v-container>
        </v-container>
      </section>
      <section class="portfolio">
        <div class="portfolio-title">
          <h2 class="text-overline" v-rellax="{ speed: 0 }">Portfolio</h2>
          <h2 class="text-h3" v-rellax="{ speed: 0 }">
            Checkout a few of my works
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
              class="about-image rellax"
              v-rellax="{ speed: 1 }"
            >
              <v-img
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                height="400"
                class="grey darken-4"
              ></v-img>
            </v-card>
            <v-container class="about-text" v-rellax="{ speed: -0.5 }">
              <h2 class="text-h3 mb-5">Hi! I am Moiz Sohail</h2>
              <p class="text-body-1 mt-5">
                Thought I should get myself a nice place to share my projects.
                So here it is. If you like my works hit me up and then we can
                work on something great together.
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
              <v-btn elevation="2" class="mt-4">Download CV</v-btn>
            </v-container>
          </v-container>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rellax: {
        speed: -0.5,
      },
      portfolio: [
        {
          head: 'App Development',
          title: 'Vlancer',
          description:
            'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
          link: '#',
          img: '',
        },
        {
          head: 'App Development',
          title: 'Vlancer',
          description:
            'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
          link: '#',
          img: '',
        },
        {
          head: 'App Development',
          title: 'Vlancer',
          description:
            'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
          link: '#',
          img: '',
        },
      ],
    }
  },
}
</script>
<style>
.vue-typer .custom.char {
  color: white;
  font-size: 45px;
  font-weight: 600;
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
.about-image {
  width: 300px;
}
.project {
  padding: 200px 0px;
}
.project .flex-row {
  padding: 0px 0px 200px;
}
.about-contact .text-body-1 {
  margin: 0px;
  padding: 0px;
}
.portfolio .text-overline {
  text-align: center;
}
.text-body-1 {
  color: rgba(255, 255, 255, 0.562);
}
.portfolio-title {
  text-align: center;
  margin-top: 10px;
  padding: 10px 0px 150px;
}
.about-contact .text-body-1 a {
  color: #2f89fc;
  text-decoration: none;
}
.about-text {
  margin-top: -80px;
  padding-right: 150px;
  margin-left: 100px;
}

.about {
  padding: 200px 100px 50px 100px;
}
.portfolio {
  padding: 50px 100px 150px 100px;
}
.fixed {
  position: fixed;
}
.bg {
  width: 100vw;
  height: 100vh;
  background: #000
    url('https://filix2.droitthemes.com/wp-content/uploads/2019/04/hero_bg.jpg')
    no-repeat fixed top left;
}
.second:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
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
</style>
