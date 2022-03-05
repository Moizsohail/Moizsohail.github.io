<template>
  <div class="one">
    <div class="title center">
      <editable-area :text="blob.title" type="h3" />
      <editable-area :text="blob.desc" />
    </div>
    <div class="grid container contain">
      <div v-for="x in blob.images" :key="x">
        <image-update>
          <v-img data-aos="fade-up" :src="$img(x, { format: 'webp' })"
            ><template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </image-update>
      </div>
    </div>
  </div>
</template>
<script>
import editableArea from '../portfolioForms/editableArea.vue'
import ImageUpdate from '../portfolioForms/imageUpdate.vue'
export default {
  components: { editableArea, ImageUpdate },
  props: {
    blob: {
      type: Object,
      required: true,
    },
    editMode: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('handleChange', e)
    },
  },
}
</script>
<style scoped>
.one {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
