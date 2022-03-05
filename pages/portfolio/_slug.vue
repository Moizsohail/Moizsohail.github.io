<template>
  <div id="portfolio">
    <div class="project-hero">
      <image-update id="image-update-lp-wrapper">
        <div
          class="cover"
          :style="{
            opacity: opacity,
          }"
        ></div>
        <div
          class="hero-image-lp"
          :style="{
            'background-image': `linear-gradient(225deg,transparent 50%,rgba(0, 0, 0, 0.08)),url(${current.bg})`,
          }"
        ></div>
      </image-update>
      <div class="project-intro container">
        <editable-area :text="current.title" type="h2" />
        <editable-area :text="current.desc" />
      </div>
    </div>
    <div v-for="(x, i) in current.section" :key="i + x.type">
      <Main v-if="x.type == 'main'" :blob="x"></Main>
      <InfoCol v-if="x.type == 'info'" :blob="x"></InfoCol>
      <Multiple v-if="x.type == 'multiple'" :blob="x"></Multiple>
      <One v-if="x.type == 'one'" :blob="x" @handleChange="handleChange" />
      <Parallax v-if="x.type == 'parallax'" :blob="x" />
      <Side v-if="x.type == 'side'" :blob="x" />
      <Tech v-if="x.type == 'tech'" :blob="x" />
    </div>
    <div id="save-changes">
      {{ changes }}
      <v-btn>Save Changes</v-btn>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
import Main from '~/components/portfolioTemplates/main'
import Multiple from '~/components/portfolioTemplates/multiple'
import InfoCol from '~/components/portfolioTemplates/infocol'
import Side from '~/components/portfolioTemplates/side'
import Parallax from '~/components/portfolioTemplates/parallax'
import One from '~/components/portfolioTemplates/one'
import Tech from '~/components/portfolioTemplates/tech'
import EditableArea from '~/components/portfolioForms/editableArea'
import ImageUpdate from '~/components/portfolioForms/imageUpdate'

export default {
  components: {
    Multiple,
    Parallax,
    Main,
    Tech,
    One,
    InfoCol,
    Side,
    EditableArea,
    ImageUpdate,
  },
  data() {
    return {
      opacity: 0.6693333333730698,
      changes: '',
      current: {},
    }
  },
  async fetch() {
    const slug = this.$route.params.slug
    console.log(`/api/project?project=${slug}`)
    try {
      const response = await this.$axios.$get(`/api/project?project=${slug}`)
      console.log(response)
      this.current = response
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }

    // eslint-disable-next-line dot-notation
  },
  head() {
    return {
      title: this.current?.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.current?.desc,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        },
      ],
    }
  },
  computed: {
    // current() {
    //   const url = this.$route.params.slug
    //   const object = this.$store.state.work.data.filter((x) => x.url === url)
    //   if (object.length === 0) {
    //     return 'error'
    //   }

    //   return object[0]
    // },
    editMode() {
      return process.env.NODE_ENV === 'development'
    },
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleChange(e) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
    handleScroll() {
      // Your scroll handling here
      const scroll = window.scrollY + 200
      if (scroll < 300) {
        this.opacity = scroll / 300
      } else this.opacity = 1
    },
  },
}
</script>
<style lang="scss">
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
  margin: auto;
}
#portfolio {
  h3 {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -2.6px;

    font-weight: 400;
  }
  h2 {
    font-size: 72px;
    line-height: 64px;
    letter-spacing: -2px;
    font-family: athelas;
    font-weight: 400;
  }
  .para {
    color: #bdb8bc;
    font-size: 18px;
    line-height: 24px;
    white-space: pre-line;
    font-weight: 400;
    letter-spacing: 0;
  }
  .v-parallax {
    height: 100vh !important;
  }
}

@media screen and (max-width: 800px) {
  .title {
    width: 80%;
  }
  #portfolio {
    h2 {
      font-size: 50px;
    }
    h3 {
      font-size: 40px;
    }
  }
}
</style>
<style scoped>
#save-changes {
  width: 100px;
  margin: auto;
}
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

  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0;
}
@media screen and (max-width: 800px) {
  .project-intro .descr {
    width: 80%;
  }
}

.spacer {
  height: 200px;
}
#image-update-lp-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -1;
}
</style>
