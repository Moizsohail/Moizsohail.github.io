<template>
  <div class="multiple">
    <div class="title content">
      <h3>{{ blob.title }}</h3>
      <p>
        {{ blob.desc }}
      </p>
    </div>

    <div class="container">
      <img
        v-for="(x, i) in blob.images"
        :key="x + i"
        class="img"
        :class="{ odd: i % 3 == 1 }"
        :src="x"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        '/work/1Vlancer/shotsnapp-1612980040.961.png',
        '/work/1Vlancer/shotsnapp-1612980050.82.png',
        '/work/1Vlancer/shotsnapp-1612978867.965.png',
        '/work/1Vlancer/shotsnapp-1612980065.223.png',
        '/work/1Vlancer/shotsnapp-1612978867.965.png',
        '/work/1Vlancer/shotsnapp-1612981221.31.png',
      ],
    }
  },
  props: {
    blob: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.multiple {
  margin: 200px auto;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* margin: auto; */
}
.content h3 {
  margin: 10px;
}
.content {
  max-width: 1000px;
  text-align: center;
  width: 400px;
  margin: auto;
}
.img {
  width: 100%;
}
.odd {
  margin-top: 100px;
}
</style>
