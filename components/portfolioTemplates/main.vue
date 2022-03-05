<template>
  <div class="d-flex container">
    <div class="main-image">
      <image-update>
        <img
          v-if="blob.main"
          :src="$img(prepareImage(blob.main), { format: 'webp' })"
        />
      </image-update>
    </div>
    <div class="text" :class="{ content: small }">
      <editable-area :text="blob.title" type="h3" multiline />
      <editable-area :text="blob.desc" type="p" multiline />
    </div>
    <div
      v-if="blob.other"
      v-rellax="{ speed: safeSpeed(-1.5) }"
      class="extra-image"
      :class="{ container: small, contained: small }"
    >
      <image-update>
        <img :src="$img(prepareImage(blob.other), { format: 'webp' })" />
      </image-update>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ImageUpdate from '~/components/portfolioForms/imageUpdate.vue'
import EditableArea from '~/components/portfolioForms/editableArea.vue'
export default {
  components: {
    EditableArea,
    ImageUpdate,
  },
  props: {
    blob: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      prepareImage: 'work/prepareImage',
    }),
    small() {
      if (process.client) {
        const width = window.innerWidth
        return width < 800
      }
      return false
    },
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
  },
}
</script>
<style scoped>
.d-flex {
  max-width: 1280px;
  margin: auto;
  display: grid !important;
  grid-template-columns: 1fr auto;
}
.extra-image {
  position: absolute;
  z-index: 3;
  right: 100px;

  margin-top: 600px;
  width: 40vw;
}
.extra-image img {
  width: 100%;
  box-shadow: -6px 8px 35px 7px rgb(0 0 0 / 70%);
}
.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 120px;
  margin-left: 60px;
  padding-top: 0;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.main-image img {
  width: 100%;
  box-shadow: 0 28px 42px 0 rgb(255 255 255 / 20%);
}
.text {
  margin: auto;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 150px;
  width: unset;
  max-width: 300px;
}
.contained {
  width: 100%;
  right: unset;
  margin: auto;
}
.main-image {
  margin: auto;
  width: 100%;
  margin-top: -60px;
  padding-left: 24px;
  max-width: unset !important;
  position: relative;
  /* position: absolute; */
  z-index: 2;
}

@media screen and (max-width: 800px) {
  .main-image {
    display: none;
  }
  .d-flex {
    grid-template-columns: 1fr;
  }
  .extra-image {
    position: relative;
    margin: auto;
  }
  .content {
    margin-left: 10px;
    max-width: 400px;
  }
  .content h3 {
    margin: 0px;
  }
}
</style>
