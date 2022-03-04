<template>
  <div>
    <component :is="type" v-if="!editorOn" @click="handle(true)">{{
      tempText
    }}</component>
    <component
      :is="multiline ? 'v-textarea' : 'v-text-field'"
      v-else
      :value="tempText"
      flat
      solo
      multiline
      append-icon="mdi-close"
      autofocus
      @keyup="(e) => (tempText = e.target.value)"
      @click:append="handle(false)"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'p', // "p" || "desc" || "h{1-6}"
    },
  },
  data() {
    const tempText = this.text
    return {
      tempText,
      editorOn: false,
    }
  },
  computed: {
    editMode() {
      return this.$store.state.editor.editMode
    },
  },
  methods: {
    handle(turnOn = false) {
      if (this.editMode) {
        if (!turnOn) {
          this.$emit('handleChange', this.tempText)
        }
        this.editorOn = turnOn
      }
    },
  },
}
</script>

<style></style>
