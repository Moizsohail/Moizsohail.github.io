<template>
  <div class="side">
    <div class="title">
      <editable-area type="h3">{{ blob.bigtitle }}</editable-area>
      <p>{{ blob.bigdesc }}</p>
    </div>
    <div class="d-flex container">
      <div class="rside vcenter">
        <div class="text">
          <editable-area type="h3" :text="blob.title" />
          <editable-area type="p" multiline :text="blob.desc" />
        </div>
        <div v-if="blob.images.length > 1" class="d-flex">
          <div
            v-for="x in blob.images"
            :key="x"
            class="tech vcenter"
            :class="{ active: current == x }"
            @click="curr = x"
          >
            <v-img :src="x"
              ><template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img>
          </div>
        </div>
      </div>
      <div class="lside vcenter">
        <transition name="slide-fade" mode="out-in">
          <img :src="$img(current, { format: 'webp' })" class="img" />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import editableArea from '../portfolioForms/editableArea.vue'
export default {
  components: { editableArea },
  props: {
    blob: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      curr: '',
    }
  },
  computed: {
    current() {
      if (this.curr) {
        return this.curr
      }
      return this.blob.images[0]
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
}
.text h3 {
  font-size: 36px !important;
}
.lside .img {
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.lside {
  width: 100%;
  height: 600px;
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
@media screen and (max-width: 600px) {
  .d-flex.container {
    display: block !important;
  }
  .vcenter {
    margin-top: unset;
  }
  .lside {
    margin-top: 40px;
    height: auto;
  }
}
</style>
