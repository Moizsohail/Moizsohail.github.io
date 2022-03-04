<template>
  <div class="one">
    <div class="title center">
      <h3>{{ blob.title }}</h3>
      <para
        :text="blob.desc"
        :edit-mode="editMode"
        @handleChange="handleChange"
      ></para>
    </div>
    <div class="grid container contain">
      <div v-for="x in blob.images" :key="x">
        <v-img data-aos="fade-up" :src="$img(x, { format: 'webp' })"
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
import para from '../portfolioForms/editableArea.vue'
export default {
  components: { para },
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
