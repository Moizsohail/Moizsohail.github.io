<template>
  <div>
    <div class="title">
      <h3>{{ blob.title }}</h3>
      <p>{{ blob.desc }}</p>
    </div>
    <div class="grid">
      <div v-for="x in blob.images" :key="x">
        <v-parallax class="parallax" :src="x"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-parallax>
        <v-img class="img" :src="x"
          ><template v-slot:placeholder>
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
