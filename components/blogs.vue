<template>
  <div v-if="getData" class="blogs">
    <section v-if="data" class="cards">
      <single-card v-for="item in getData" :key="item.url" :data="item" />
    </section>
  </div>
  <div v-else></div>
</template>

<script>
import singleCard from '~/components/singleCard.vue'
export default {
  components: {
    singleCard,
  },
  data() {
    return {
      data: null,
    }
  },
  async fetch() {
    try {
      this.data = await this.$axios.$get('/api/blog')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  computed: {
    getData() {
      return this.data?.items?.slice(0, 6) || []
    },
  },
}
</script>

<style scoped lang="scss">
.blogs {
  width: 100%;
}
.cards {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  gap: 20px;
}
</style>
