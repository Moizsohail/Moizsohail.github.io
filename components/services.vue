<template>
  <div>
    <div>
      <h2 class="text-overline">Services</h2>
      <h2 class="text-h3">My capabilities</h2>
    </div>
    <div class="services row max">
      <div class="side col-lg-5 col-md-4 col-sm-12 col-12">
        <ul>
          <li
            v-for="x in catskills"
            :key="x"
            :class="{ active: curr === x }"
            @click="curr = x"
          >
            <p>
              {{ x }}
            </p>
          </li>
        </ul>
      </div>
      <div class="selected-service col-lg-7 col-md-8 col-sm-12 col-12">
        <div class="row">
          <div
            v-for="x in currentskills"
            :key="x.icon"
            class="col-md-6 col-sm-6 col-12 skill"
          >
            <div class="icon">
              <i :class="x.icon" aria-hidden="true">{{ x.it }} </i>
            </div>
            <h4>{{ x.title }}</h4>
            <p>{{ x.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="services row min">
      <v-expansion-panels flat max="1" accordion>
        <v-expansion-panel v-for="x in catskills" :key="x" @click="curr = x">
          <v-expansion-panel-header
            class="tile-header"
            :class="{ active: curr === x }"
          >
            {{ x }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="selected-service col-lg-7 col-md-8 col-sm-12 col-12">
              <div class="row">
                <div
                  v-for="x in currentskills"
                  :key="x.icon"
                  class="col-md-6 col-sm-6 col-12 skill"
                >
                  <div class="icon">
                    <i :class="x.icon" aria-hidden="true">{{ x.it }} </i>
                  </div>
                  <h4>{{ x.title }}</h4>
                  <p>{{ x.desc }}</p>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curr: 'UI/UX Design',
      skills: [
        {
          head: 'UI/UX Design',
          title: 'Flutter Development',
          icon: 'fab fa-android',
          desc: '2 Projects',
        },
        {
          head: 'UI/UX Design',
          title: 'Nuxt/Vue Development',
          icon: 'fab fa-vuejs',
          desc: '3 Projects',
        },
        {
          head: 'UI/UX Design',
          title: 'HTML/CSS Development',
          icon: 'fab fa-html5',
          desc: '3 Projects',
        },
        {
          head: 'UI/UX Design',
          title: 'Figma/Balsamiq Prototyping',
          icon: 'fab fa-figma',
          desc: '3 Projects',
        },

        {
          head: 'Backend Development',
          title: 'Node JS',
          icon: 'fab fa-node-js',
          desc: '1 Project',
        },
        {
          head: 'Backend Development',
          title: 'SQL/Mongoose',
          icon: 'fa fa-database',
          desc: 'Database Managment',
        },
        {
          head: 'Backend Development',
          title: 'Digital Ocean Deployment',
          icon: 'fab fa-digital-ocean',
        },
        {
          head: 'Automation',
          title: 'Selenium',
          icon: 'fas fa-spider',
        },
        {
          head: 'Automation',
          title: 'Pyautogui',
          icon: 'fas fa-robot',
        },
        {
          head: 'Deep Learning',
          title: 'TensorFlow',
          icon: 'fas fa-brain',
        },
        {
          head: 'Deep Learning',
          title: 'Keras',
          icon: 'fab fa-kickstarter-k',
        },
        {
          head: 'Languages',
          title: 'C++',
          icon: 'fab fa-cuttlefish',
          it: '++',
        },
        {
          head: 'Languages',
          title: 'Python',
          icon: 'fab fa-python',
        },
        {
          head: 'Languages',
          title: 'Javascript',
          icon: 'fab fa-js',
        },
        {
          head: 'Languages',
          title: 'Dart',
          icon: 'fab fa-dyalog',
        },
      ],
    }
  },
  computed: {
    currentskills() {
      return this.skills.filter((x) => x.head === this.curr)
    },
    catskills() {
      const cat = new Set()
      this.skills.forEach((x) => cat.add(x.head))
      return cat
    },
  },
}
</script>
<style scoped>
.services .side ul {
  margin-left: -10px;
  padding: 0px;
}
.services .skill {
  height: 200px;
}
.services .skill i {
  font-size: 40px;
  color: #595959;
  line-height: 28px;
}

@media screen and (max-width: 400px) {
  .max {
    display: none;
  }
  .min {
    display: block;
  }
}
@media screen and (max-width: 750px) {
  .text-h3 {
    font-size: 3em !important;
  }
}
.text-h3 {
  font-size: 4em !important;
  margin-top: 5px;
  font-family: 'futuraheavy' !important;
  margin-bottom: 40px;
}
.services .skill p {
  color: #c1c1c1;
  font-weight: 300;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  line-height: 28px;
}
.services .skill h4 {
  color: #c1c1c1;
  font-size: 18px;
  cursor: pointer;
  transition: 0.4s ease;
  font-weight: 700;
  line-height: 40px;
  font-family: 'Poppins', sans-serif;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.tile-header {
  border-color: #dee2e6 #dee2e6 #fff;
  font-size: 1.4em;
  font-weight: 600;
  line-height: 60px;
  font-family: 'futuraheavy';
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.4s ease;
  display: block;
}
.services .side li {
  border-color: #dee2e6 #dee2e6 #fff;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 60px;
  font-family: 'futuraheavy';
  border: none;
  padding: 0;
  cursor: pointer;
  transition: 0.4s ease;
  display: block;
}
i {
  transition: 0.4s ease;
  cursor: pointer;
}
.services .skill:hover h4,
.services .skill:hover i,
.services .side li:hover,
.services .side li.active,
.v-item--active {
  color: #ff3366 !important;
}
</style>
