<template>
  <div>
    <div class="title">
      <editable-area :text="blob.title" type="h3" />
      <editable-area :text="blob.desc" />
    </div>
    <div class="grid">
      <div v-for="x in blob.images" :key="x">
        <v-parallax class="parallax" :src="$img(x, { format: 'webp' })"
          ><template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-parallax>
        <v-img class="img" :src="$img(x, { format: 'webp' })"
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
</template>
<script>
import editableArea from '../portfolioForms/editableArea.vue'

export default {
  components: { editableArea },
  props: {
    blob: {
      type: Object,
      required: true,
    },
    editMode: {
      type: Boolean,
      default: false,
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
