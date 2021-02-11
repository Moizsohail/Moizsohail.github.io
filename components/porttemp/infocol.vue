<template>
  <div class="infocol">
    <div class="title">
      <h3>{{ blob.title }}</h3>
    </div>
    <div class="d-flex">
      <div v-for="(x, i) in blob.column" :key="x.title + i">
        <div class="content">
          <h3 class="minititle">{{ x.title }}</h3>
          <p>{{ x.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [
        { title: 'Messaging', decr: 'Platform' },
        { title: 'Notifications', decr: 'Platform' },
        { title: 'Easy Paisa Transaction', decr: 'Platform' },
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
.infocol {
  /* display: flex; */
  margin: 400px auto 200px auto;
  text-align: center;
}
.title h3 {
  margin-bottom: 50px;
}
.minititle {
  font-family: athelas !important;
  font-size: 1em !important;
  font-weight: bold !important;
  letter-spacing: 0px !important;
}
.infocol > div {
  margin: auto;
  width: 100%;
  justify-content: space-evenly;
}
.content {
  width: 250px;
}
</style>
