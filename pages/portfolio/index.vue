<template>
  <div id="portfolio">
    <!-- Vlancer DementiaCare+ PsifiX OrientedYolo MemeCleaner Detector LMSScraper Retweeter-->
    <h3 id="my-work">MY WORK</h3>
    <div id="list-complete-demo">
      <div class="list-complete" tag="section">
        <div class="trans row">
          <div
            v-for="(item, i) in work"
            :key="item.title + i"
            class="col-md-4 col-lg-3 col-sm-6 col-xs-12"
            :style="`--index: ${i};`"
          >
            <div class="list-complete-item" elevation="5" @click="goto(item)">
              <v-img
                v-ripple
                format="webp"
                :src="$img(item.img[0], { format: 'webp' })"
                aspect-ratio="0.7"
                fit="cover"
                class="grey darken-4"
                @click="currObj = item"
              >
                <template #placeholder>
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
              <h3 class="text-h3 card-top-title gotham-title">
                {{ item.title }}
              </h3>
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
  head() {
    return {
      title: 'Portfolio',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My Portfolio',
        },
      ],
    }
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
      work: [],
    }
  },
  async fetch() {
    try {
      this.work = await this.$axios.$get('/api/project')
    } catch (e) {
      console.log(e)
      this.$nuxt.error({ statusCode: 500, message: e })
    }
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
<style scoped lang="scss">
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
.card-top-title {
  z-index: 1;
  top: 30px;
  left: 30px;
  font-size: 2.5rem !important;
  position: absolute;
}
#my-work {
  @extend .gotham-title;
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin: 80px 0px 10px 0px;
}
.gotham-title {
  font-family: Gotham !important;
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
  overflow: hidden;
  cursor: pointer;
  flex: 25%;
  position: relative;
  padding: 10px;
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
