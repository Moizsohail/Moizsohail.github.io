<template>
  <div>
    <div class="title center">
      <h3>{{ blob.title }}</h3>
      <p>{{ blob.desc }}</p>
    </div>
    <div class="grid container contain">
      <div v-for="x in blob.images" :key="x">
        <v-img data-aos="fade-up" :src="x" />
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
<style scoped></style>
