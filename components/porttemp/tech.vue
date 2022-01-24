<template>
  <div class="side">
    <div class="title center">
      <h3>{{ blob.title }}</h3>
      <p>{{ blob.desc }}</p>
    </div>
    <div class="d-flex container">
      <div class="rside vcenter">
        <div class="text">
          <h3>{{ current.title }}</h3>
          <p>
            {{ current.desc }}
          </p>
        </div>
        <div v-if="technology.length > 1" class="d-flex">
          <div
            v-for="x in technology"
            :key="x.title"
            class="tech vcenter"
            :class="{ active: current == x }"
            @click="curr = x"
          >
            <v-img :src="$img(x.image, { format: 'webp' })"
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
        <img :src="$img(current.image, { format: 'webp' })" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blob: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      curr: {},
    }
  },
  computed: {
    technology() {
      return this.$store.state.tech.tech
        .filter((x) => this.blob.tech.includes(x.title))
        .slice(0, 3)
    },
    current() {
      if (this.curr.title) {
        return this.curr
      }
      return this.technology[0]
    },
  },
}
</script>
<style scoped>
.side > .d-flex {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
}
.text h3 {
  font-size: 36px !important;
}
.lside img {
  width: 100%;
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
