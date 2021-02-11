<template>
  <div class="side">
    <div class="title"><h3>Technology</h3></div>
    <div class="d-flex">
      <div class="rside">
        <div class="text">
          <h3>{{ current.title }}</h3>
          <p>
            {{ current.descr }}
          </p>
        </div>
        <div class="d-flex">
          <img
            v-for="x in tech"
            :key="x"
            class="tech"
            :src="x.img"
            @click="curr = x"
            :class="{ active: current == x }"
          />
        </div>
      </div>
      <div class="lside">
        <img :src="current.img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curr: {},
      tech: [
        {
          title: 'Flutter',
          descr:
            'Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
          img: '/work/1Vlancer/shotsnapp-1612984992.885.png',
        },
        {
          title: 'Strapi',
          descr:
            'Strapi is the leading open-source headless CMS. It’s 100% Javascript, fully customizable and developer-first.',
          img: '/work/1Vlancer/shotsnapp-1612985845.293.png',
        },
      ],
    }
  },
  computed: {
    current() {
      if (this.curr.title) {
        return this.curr
      }
      return this.tech[0]
    },
  },
}
</script>
<style scoped>
.title {
  margin: auto;
  text-align: center;
  margin-bottom: 100px;
}
.side > .d-flex {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  padding-left: 24px;
}
.text h3 {
  font-size: 36px !important;
}
.lside img {
  width: 100%;
}
.lside {
  width: 100%;
}
.text {
  width: 300px;
}
.tech {
  margin-top: 70px;
  cursor: pointer;
  transition: 0.2s border;
  width: 100px;
}
.active,
.tech:hover {
  border: 2px solid white;
}
</style>
