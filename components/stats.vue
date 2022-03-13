<template>
  <div class="all-stats">
    <v-card
      class="single-stat rounded-lg"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <v-sparkline
        key="something"
        :smooth="16"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :value="[2, 3, 5, 7]"
        auto-draw
        stroke-linecap="round"
      ></v-sparkline>
    </v-card>

    <v-card
      class="single-stat rounded-lg"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="20"
        color="teal"
      >
        30
      </v-progress-circular>
    </v-card>
    <v-card class="single-stat"> > </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return { github: null }
  },
  fetch() {
    try {
      // this.github = await this.$axios.$get(
      //   'https://github-readme-stats.vercel.app/api?username=moizsohail'
      // )
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
}
</script>

<style scoped>
.single-stat {
  padding: 10px;
  width: 200px !important;
}
.all-stats {
  display: flex;
  width: 100%;

  justify-content: space-between;
}
</style>
