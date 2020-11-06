<template>
  <v-col class="pa-0" id="profileinfo">
    <v-card class="mx-auto pt-5" tile>
      <v-row align="center" class="fill-height">
        <v-col align-self="center" class="pa-0" cols="12">
          <v-badge bottom offset-x="20" dot offset-y="20"
            ><v-avatar class="profile" color="grey" size="100">
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
          </v-badge>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title"> Moiz Sohail </v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="second" tile>
      <ul class="infotable">
        <li v-for="info in infos" :key="info.title">
          <h6>{{ info.title }}:</h6>
          <span>{{ info.data }}</span>
        </li>
      </ul>
      <v-divider class="mx-auto" inset></v-divider>
      <div class="skills">
        <v-list-item v-for="s in skills" :key="s.title" class="m-0 px-0">
          <v-list-item-content>
            <v-list-item-title class="skills-title">
              <p>{{ s.title }}</p>
              <span>{{ s.val }}%</span>
            </v-list-item-title>
            <v-list-item-subtitle
              ><template>
                <v-progress-linear
                  :value="s.val"
                ></v-progress-linear> </template
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider class="mx-auto" inset></v-divider>
      <div class="download-cv">
        <p class="text-overline">
          <v-icon small>mdi-download</v-icon> Download CV
        </p>
      </div>
    </v-card>
  </v-col>
</template>
<script>
export default {
  data() {
    const ageDate = new Date(
      Date.now() - Date.parse('05 Sep 1998 00:00:00 GMT')
    )
    return {
      infos: [
        {
          title: 'Residence',
          data: 'Pakistan',
        },
        {
          title: 'City',
          data: 'Karachi',
        },
        {
          title: 'Age',
          data: ageDate.getUTCFullYear() - 1970,
        },
      ],
      skills: [
        {
          title: 'Backend Development',
          val: 95,
        },
        {
          title: 'App Development',
          val: 90,
        },
        {
          title: 'Web Development',
          val: 85,
        },
        {
          title: 'Data Analytics',
          val: 75,
        },
        {
          title: 'Tensorflow',
          val: 80,
        },
      ],
    }
  },
}
</script>
<style>
.row {
  margin: 0px;
}
</style>
<style scoped>
.skills-title {
  font-size: 13px;
  margin-bottom: 9px;
  display: flex;
  justify-content: space-between;
}
.skills-title span {
  color: rgba(255, 255, 255, 0.719);
}
.skills-title p {
  margin: 0px;
}
#profileinfo {
  text-align: center;
  padding: 0px 20px;
}
.infotable {
  padding: 15px 40px;
}
.download-cv {
  display: flex;
}
.skills,
.download-cv {
  text-align: left;
  padding: 15px 40px;
}
.download-cv p {
  cursor: pointer;
}
.download-cv p:hover {
  color: white;
}
.infotable li {
  padding: 4px 0px;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.infotable li h6 {
  color: white;
  font-size: 13px;
  font-weight: 400;
}
.infotable li span {
  color: #aaaaaaef;
  font-size: 13px;
  font-weight: 400;
}
.second {
  background: rgba(0, 0, 0, 0.678);
}
</style>
