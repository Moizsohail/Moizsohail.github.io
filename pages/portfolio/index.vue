<template>
  <div id="portfolio">
    <!-- Vlancer DementiaCare+ PsifiX OrientedYolo MemeCleaner Detector LMSScraper Retweeter-->
    <p class="text-h3 mx-auto title">MY WORK</p>
    <div id="list-complete-demo">
      <div class="list-complete" tag="section">
        <div class="trans row">
          <div
            v-for="(item, i) in work"
            :key="item.title + i"
            class="col-md-4 col-lg-3 col-sm-6 col-xs-12"
            :style="`--index: ${i};`"
          >
            <div class="list-complete-item" @click="goto(item)" elevation="5">
              <v-img
                v-ripple
                :src="item.img[0]"
                @click="currObj = item"
                aspect-ratio="0.7"
                class="grey darken-4"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <p class="text-h3 top-title">{{ item.title }}</p>
              <!-- <p class="text-p bottom-tags">{{ item.tags | toString }}</p> -->
              <!-- <v-img
                :src="item.img"
                aspect-ratio="0.7"
                class="grey lighten-2 overlay"
                :class="{ start: item.clicked }"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Modal from '~/components/modal'
export default {
  components: {
    Modal,
  },
  filters: {
    toString(value) {
      if (!value) return ''
      var str = ''
      value.forEach((x) => (str = str + x + ', '))
      return str.slice(0, -2)
    },
  },
  data() {
    return {
      id: -1,
      items: [],
      currObj: {},
    }
  },
  computed: {
    work() {
      return this.$store.state.work.data
    },
  },

  methods: {
    goto(x) {
      this.$router.push('/portfolio/' + x.url)
    },
    close() {
      this.currObj = {}
    },
  },
}
</script>
<style scoped>
@font-face {
  font-family: 'Gotham';
  src: local('Gotham'),
    url(~assets/fonts/trump_gothic_east_bold.ttf) format('truetype');
}
#portfolio {
  margin: 60px 0px;
}
.overlay {
  position: absolute;
  display: none;
}

.top-title {
  z-index: 1;
  top: 30px;
  left: 30px;
  font-family: Gotham !important;
  /* font-size: 39px !important; */
  font-size: 2.5rem !important;
  position: absolute;
}
.bottom-tags {
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 16px;
}
.list {
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-top: 20px;
  display: inline-block;
  padding: 0 10px;
}

span {
  position: relative;
  display: block;
  cursor: pointer;
}
.list__item {
  cursor: pointer;
  color: rgb(165, 165, 165);
}
p.title {
  /* font-family: Gothic, sans-serif !important; */
  color: #fff;
  font-family: Gotham !important;
  line-height: 1.8125rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 24px;
  font-size: 1.3rem;
  text-align: center;
  position: relative;
  text-decoration: none;
  padding: 40px 20px;
}
.active {
  color: white;
}
.list__item--yellow {
  color: #ffc56c;
}

.list__item--blue {
  color: #6ec5e9;
}

.list__item--red {
  color: #ff5959;
}

span:before,
span:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 4px;
  bottom: -2px;
  margin-top: -0.5px;
  background: #fff;
}

span:before {
  left: -2.5px;
}
span:after {
  right: 2.5px;
  background: #fff;
  -webkit-transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.active span:hover:before,
span:hover:before {
  background: #fff;
  width: 100%;
  -webkit-transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.active span:hover:after,
span:hover:after {
  background: transparent;
  width: 100%;
  -webkit-transition: 0s;
  transition: 0s;
}
/*** */
.list-complete {
  /* display: grid; */
  margin: auto;
  width: 80%;
  margin: auto;

  flex-direction: row;
  flex-wrap: wrap;
}

.list-complete-item:hover {
  transform: translateY(-10px);
}
.list-complete-item {
  transition: transform 0.5s;

  cursor: pointer;
  flex: 25%;

  /* animation: fade-in 1s ease calc(0.025s * (var(--length) - (var(--index) + 1))); */
  position: relative;

  /* height: 200px; */
  padding: 10px;
  /*   display: inline-block;
  margin-right: 10px; */
}
/* @keyframes fade-in {
  0% {
    transform: scale(0.8) translateX(10px);
  }
  100% {
    transform: scale(1) translateX(0px);
  }
} */
.list-complete-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
/*
.fade-enter-active,
.fade-leave-active {
  transition-delay: calc(5s * (var(--length) - (var(--index) + 1)));
  transition: all 1s;
}
.fade-enter-to,.fade-leave
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
/* transform: scale(0.8) translateX(10px);

  opacity: 0;
} */

/* .grid {
  transition: all 0.8s ease;
 } */

/* .grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.staggered-fade-move {
  transition: transform 0.8s ease;
} */
</style>
