<template>
  <div class="infocol">
    <div class="title">
      <h3>{{ blob.title }}</h3>
    </div>
    <div class="flex">
      <div v-for="(x, i) in blob.column" :key="x.title + i">
        <div class="content">
          <i class="icon" :class="x.icon"> </i>
          <h3 class="minititle">{{ x.title }}</h3>
          <p>{{ x.desc }}</p>
        </div>
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
  data() {
    return {
      info: [
        { title: 'Messaging', decr: 'Platform' },
        { title: 'Notifications', decr: 'Platform' },
        { title: 'Easy Paisa Transaction', decr: 'Platform' },
      ],
    }
  },
}
</script>
<style scoped>
.icon {
  font-size: 50px;
}
.infocol {
  /* display: flex; */
  margin: 200px auto 200px auto;
  text-align: center;
}
.title h3 {
  margin-bottom: 50px;
}
.minititle {
  font-family: athelas !important;
  margin-top: 15px;
  font-size: 1.2em !important;
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
.flex {
  display: flex;
}
@media screen and (max-width: 800px) {
  .flex {
    align-items: center;
    flex-direction: column;
    margin: auto;
    text-align: center;
  }
}
</style>
