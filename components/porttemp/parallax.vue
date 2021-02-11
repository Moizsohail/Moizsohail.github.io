<template>
  <div>
    <div class="title">
      <h3>{{ blob.title }}</h3>
      <p>{{ blob.desc }}</p>
    </div>
    <div class="grid">
      <v-parallax v-for="x in blob.images" :key="x" :src="x" />
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
