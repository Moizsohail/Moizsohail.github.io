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
    <NavBar :drawer="rightDrawer" @close="rightDrawer = false"> </NavBar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer v-model="leftDrawer" temporary fixed>
      <Profile></Profile>
    </v-navigation-drawer>
    <!-- 
    <v-navigation-drawer
      id="imagenav"
      absolute
      dark
      src="https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-37.png"
      v-model="rightDrawer"
      right
      temporary
      fixed
    >
      <v-list>
        <v-list-item v-for="([title, link], i) in navLinks" :key="i" link>
          <v-list-item-icon> </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ title }}{{ link }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import Profile from '~/components/profilecard'
import NavBar from '~/components/navbar'
export default {
  components: { Profile, NavBar },
  data() {
    return {
      navLinks: [
        {
          title: 'Home',
          link: '#',
        },
      ],
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
#imagenav .v-responsive::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.74);
  top: 0;
  left: 0;
}
</style>
