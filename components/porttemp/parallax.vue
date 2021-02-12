<template>
  <div>
    <div class="title">
      <h3>{{ blob.title }}</h3>
      <p>{{ blob.desc }}</p>
    </div>
    <div class="grid">
      <div v-for="x in blob.images" :key="x">
        <v-parallax class="parallax" :src="x" />
        <v-img class="img" :src="x" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blob: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.img {
  display: none;
}
@media screen and (max-width: 800px) {
  .parallax {
    display: none;
  }
  .img {
    display: block !important;
  }
}
</style>
