<template>
  <v-app dark>
    <div class="center">
      <v-card>
        <v-card-title> {{ getText }} </v-card-title>
        <v-card-text class="img">
          <div v-if="error.statusCode === 404">
            <img
              src="https://media.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif"
            />
          </div>
          <div v-else-if="devMode">
            <img
              src="https://media.giphy.com/media/xZsLh7B3KMMyUptD9D/giphy.gif"
            />
          </div>

          <h1 v-else>
            {{ otherError }}
          </h1>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="yellow accent-4" to="/"> Home Page </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  computed: {
    getText() {
      if (this.error.statusCode === 404) return 'Not found'
      else if (process.env.NODE_ENV !== 'development') return 'Work In Progress'
      else return this.error
    },
    devMode() {
      return process.env.NODE_ENV !== 'development'
    },
  },
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 20px;
}
.center {
  width: 100%;
  display: flex;
  justify-content: center;

  height: 100%;
  align-items: center;
}
.img div {
  display: block;
  img {
    height: 300px;
  }
}
</style>
