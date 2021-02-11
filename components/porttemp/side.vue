<template>
  <div class="side">
    <div class="title">
      <h3>{{ blob.title }}</h3>
    </div>
    <div class="d-flex">
      <div class="rside">
        <div class="text">
          <h3>{{ current.title }}</h3>
          <p>
            {{ current.desc }}
          </p>
        </div>
        <div v-if="technology.length > 1" class="d-flex">
          <img
            v-for="x in technology"
            :key="x.title"
            class="tech"
            :src="x.image"
            @click="curr = x"
            :class="{ active: current == x }"
          />
        </div>
      </div>
      <div class="lside">
        <img :src="current.image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curr: {},
    }
  },
  props: {
    blob: {
      required: true,
      type: Object,
    },
  },
  computed: {
    technology() {
      return this.$store.state.tech.tech.filter((x) =>
        this.blob.tech.includes(x.title)
      )
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
