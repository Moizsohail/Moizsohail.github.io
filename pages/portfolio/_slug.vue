<template>
  <div id="port">
    <div class="project-hero">
      <div class="cover" :style="{ opacity: opacity }"></div>
      <div class="hero-image-lp"></div>
      <div class="project-intro">
        <h2>Vlancer</h2>
        <p class="descr">
          A startup to introduce a fiverr like platform within pakistan where
          people can put up advertisement for work they want to done and the
          clients on the other can easily connect and earn some money. (Web,
          iOS, Android).
        </p>
      </div>
    </div>
    <Main></Main>
    <InfoCol></InfoCol>
    <Multiple></Multiple>
    <Side />
    <div class="spacer"></div>
  </div>
</template>

<script>
import Main from '~/components/porttemp/main'
import Multiple from '~/components/porttemp/multiple'
import InfoCol from '~/components/porttemp/infocol'
import Side from '~/components/porttemp/side'
export default {
  components: {
    Multiple,
    Main,
    InfoCol,
    Side,
  },
  data() {
    return {
      opacity: 0.0666,
    }
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      const scroll = window.scrollY + 20
      if (scroll < 300) {
        this.opacity = scroll / 300
      } else this.opacity = 1
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style>
#port h3 {
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2.6px;
  font-family: athelas;
  font-weight: 400;
}
#port h2 {
  font-size: 72px;
  line-height: 64px;
  letter-spacing: -2px;
  font-family: athelas;
  font-weight: 400;
}
#port p {
  font-family: ministry;
  color: #a0989e;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0;
}
#port .v-parallax {
  height: 100vh !important;
}
</style>
<style scoped>
.project-hero .cover {
  position: absolute;
  height: 92vh;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.75)),
    to(rgba(0, 0, 0, 0.75))
  );
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.75)
  );
  opacity: 1;

  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#21202a),
    to(#21202a)
  );
  background-image: linear-gradient(180deg, #21202a, #21202a);
  background-position: 0 0;
  -webkit-filter: none;
  filter: none;
  width: 100%;
  height: 75vh;
}
.project-hero {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  width: 100%;

  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
}
.hero-image-lp {
  z-index: -2;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;

  background-image: linear-gradient(
    225deg,
    transparent 50%,
    rgba(0, 0, 0, 0.08)
  );
  background-image: linear-gradient(
      225deg,
      transparent 50%,
      rgba(0, 0, 0, 0.08)
    ),
    url(https://uploads-ssl.webflow.com/5b6b1bfc681f89d334b144d5/5b6dca153d9b840f1370ab98_lp-hero-2x.jpg);
  background-size: auto, cover;
  background-position: 0 0, 50% 50%;
  background-repeat: repeat, no-repeat;
  width: 100%;
  height: 75vh;
  background-attachment: scroll, fixed;
}
.project-intro {
  margin-top: -300px;
  margin-bottom: 80px;
  padding-right: 24px;
  padding-left: 24px;
  display: block;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  max-width: 1280px;
}
.project-intro .descr {
  width: 420px;
  margin-bottom: 0;
  color: hsla(0, 0%, 100%, 0.49);
  text-align: left;
  font-family: ministry;

  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0;
}

.spacer {
  height: 200px;
}
</style>
