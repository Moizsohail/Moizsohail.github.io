<template>
  <div class="wrapper">
    <slot></slot>
    <div v-if="$store.state.editor.editMode" class="image-upload-edit">
      <input
        id="fileElem"
        ref="file"
        type="file"
        accept="image/*"
        @change="handleUpdate"
      />
      <label for="fileElem" class="label-icon">
        <v-icon class="icon" x-large>mdi-pencil</v-icon>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleUpdate(e) {
      const formData = new FormData()
      formData.append('project', '1Vlancer')
      formData.append('jsonPath', 'bg')
      formData.append('image', this.$refs.file.files[0])
      this.$axios
        .$post('/api/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function () {
          // eslint-disable-next-line no-console
          console.log('SUCCESS!!')
        })
        .catch(function () {
          // eslint-disable-next-line no-console
          console.error('FAILURE!!')
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
#fileElem {
  display: None;
  width: 100%;
  height: 100%;
}
.image-upload-edit {
  width: 100%;
  height: 100%;
  top: 0px;
  cursor: pointer;
  position: absolute;

  &:hover {
    background-color: rgba(85, 85, 85, 0.482);
    & .icon {
      visibility: visible;
    }
  }
  .label-icon {
    width: 100px;
    height: 100px;
  }
  .icon {
    width: 100px;
    height: 100px;
    z-index: 10;
    font-size: 90px;
    justify-content: center;
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
}
</style>
