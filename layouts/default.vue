<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" elevation="0" flat app>
      <v-btn icon @click.stop="leftDrawer = !leftDrawer">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer v-model="leftDrawer" temporary fixed>
      <Profile></Profile>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="rightDrawer" right temporary fixed>
      <v-list>
        <v-list-item>Home </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>About </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>Portfolio </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>Contact </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Profile from '~/components/profilecard'
export default {
  components: { Profile },
  data() {
    return {
      clipped: false,

      fixed: false,
      leftDrawer: false,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.v-main {
  padding: 0px !important;
}
</style>
