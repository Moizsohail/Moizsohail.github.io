<template>
  <v-card dark elevation="5">
    <p class="text-overline">{{ item.topic }}</p>
    <v-card-title class="title">
      <p>{{ item.title }}</p>
      <span>{{ item.date }}</span>
    </v-card-title>
    <v-card-text class="text--primary">
      <p>
        {{ item.desc }}
      </p>
      <a class="link" :href="item.link">Diplome</a>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
}
</script>
<style scoped>
.link {
  color: #ffc107;
  box-shadow: none;
  text-decoration: none;
}
.link:hover::after {
  margin-left: 5px;
}
.text-overline {
  padding: 12px 16px 0px;
  opacity: 0.5;
}
.v-application .title {
  padding: 0px 16px;
  margin-top: -10px;
}
.link::after {
  font-family: 'FontAwesome';
  content: '\f054';
  font-weight: 900;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  right: 0;
  text-rendering: auto;
  margin-bottom: 1px;
  -webkit-font-smoothing: antialiased;
  font-size: 9px;
  /* top: 2px; */
  -webkit-transform: translateX(5px);
  transform: translateX(5px);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.title span {
  margin-left: auto;
  background: rgba(0, 0, 0, 0.582);
  color: #7a7a7a;
  padding: 1px 15px;
  border-radius: 25px;
  -webkit-box-shadow: inset 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  box-shadow: inset 0 3px 8px 0 rgba(88, 88, 88, 0.11);
  font-size: 12px;
}
.title p {
  font-size: 14px;
  font-weight: 600;
}
.text--primary {
  position: relative;
}
.text--primary p {
  color: #7a7a7a;
}
</style>
