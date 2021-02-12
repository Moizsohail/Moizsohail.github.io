<template>
  <div id="port">
    <div class="project-hero">
      <div class="cover" :style="{ opacity: opacity }"></div>
      <div
        class="hero-image-lp"
        :style="{
          'background-image': `linear-gradient(225deg,transparent 50%,rgba(0, 0, 0, 0.08)),url(${current.bg})`,
        }"
      ></div>
      <div class="project-intro container">
        <h2>{{ current.title }}</h2>
        <p class="descr">
          {{ current.desc }}
        </p>
      </div>
    </div>
    <div v-for="(x, i) in current.section" :key="i + x.type">
      <Main v-if="x.type == 'main'" :blob="x"></Main>
      <InfoCol v-if="x.type == 'info'" :blob="x"></InfoCol>
      <Multiple v-if="x.type == 'multiple'" :blob="x"></Multiple>
      <One v-if="x.type == 'one'" :blob="x" />
      <Parallax v-if="x.type == 'parallax'" :blob="x" />
      <Side v-if="x.type == 'side'" :blob="x" />
      <Tech v-if="x.type == 'tech'" :blob="x" />
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
import Main from '~/components/porttemp/main'
import Multiple from '~/components/porttemp/multiple'
import InfoCol from '~/components/porttemp/infocol'
import Side from '~/components/porttemp/side'
import Parallax from '~/components/porttemp/parallax'
import One from '~/components/porttemp/one'
import Tech from '~/components/porttemp/tech'
export default {
  components: {
    Multiple,
    Parallax,
    Main,
    Tech,
    One,
    InfoCol,
    Side,
  },
  data() {
    return {
      opacity: 0.6693333333730698,
    }
  },
  computed: {
    current() {
      const url = this.$route.params.slug
      const object = this.$store.state.work.data.filter((x) => x.url === url)
      if (object.length === 0) {
        return 'error'
      }

      return object[0]
    },
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      const scroll = window.scrollY + 200
      console.log(this.opacity)
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
.title {
  margin-bottom: 60px !important;
  max-width: 1000px;
  width: 400px;
}
@media screen and (max-width: 400px) {
  .title {
    width: 80%;
  }
}
.vcenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -50px;
}

.title h3 {
  margin: 10px;
}
.center {
  text-align: center;
  margin: auto;
}
.contain {
  /* padding-left: 24px;
  padding-right: 24px;
  max-width: 900px; */
  margin: auto;
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
  white-space: pre-line;
  font-weight: 300;
  letter-spacing: 0;
}
#port .v-parallax {
  height: 100vh !important;
}
@media screen and (max-width: 400px) {
  .title {
    width: 80%;
  }
  #port h2 {
    font-size: 50px;
  }
  #port h3 {
    font-size: 40px;
  }
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
  height: 100vh;
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

  background-size: auto, cover;
  background-position: 0 0, 50% 50%;
  background-repeat: repeat, no-repeat;
  width: 100%;
  height: 100vh;
  background-attachment: scroll, fixed;
}
.project-intro {
  margin-top: -300px;
  margin-bottom: 80px;
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
