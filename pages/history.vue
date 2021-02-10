<template>
  <div id="history">
    <v-row class="d-flex">
      <div>
        <p class="text-h6">Education</p>
        <v-timeline reverse align-top dense>
          <v-timeline-item
            v-for="(item, i) in educ"
            :key="i"
            color="#ffc107"
            dark
            small
          >
            <Card :item="item" />
          </v-timeline-item>
        </v-timeline>
      </div>
      <div>
        <p class="text-h6">Work Experience</p>
        <v-timeline reverse align-top dense>
          <v-timeline-item
            v-for="(item, i) in work"
            :key="i"
            color="#ffc107"
            dark
            small
          >
            <Card :item="item" />
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-row>
  </div>
</template>
<script>
import Card from '~/components/histcard'
export default {
  components: {
    Card,
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
  },
  data() {
    return {
      work: [
        {
          title: 'Computer Vision',
          topic: 'Teaching Assistant',
          date: 'jan 2018 - may 2020',
          desc: 'Bsc in Economics & Mathematics',
          link: '#',
        },
        {
          title: 'Brick Kiln Detection',
          topic: 'Reasearch Project',
          date: 'jan 2018 - may 2020',
          desc: 'A levels',
          link: '#',
        },
        {
          title: 'Folio3',
          topic: 'Internship',
          date: 'jan 2018 - may 2020',
          desc: 'A levels',
          link: '#',
        },
        {
          title: 'Computer Vision ',
          topic: 'Teaching Assistant',
          date: 'jan 2018 - may 2020',
          desc: 'O levels',
          link: '#',
        },
        {
          title: 'Introduction To Computer Science',
          topic: 'Teaching Assistant',
          date: 'jan 2018 - may 2020',
          desc: 'O levels',
          link: '#',
        },
        {
          title: 'Introduction To Computer Science',
          topic: 'Teaching Assistant',
          date: 'jan 2018 - may 2020',
          desc: 'O levels',
          link: '#',
        },
      ],
      educ: [
        {
          title: 'Lahore University Of Management Sciences',
          topic: 'University',
          date: 'jan 2018 - may 2020',
          desc: 'Bsc in Economics & Mathematics',
          link: '#',
        },
        {
          title: "ST. Patrick's High School",
          topic: 'College',
          date: 'jan 2018 - may 2020',
          desc: 'A levels',
          link: '#',
        },
        {
          title: "ST. Paul's English High School",
          topic: 'School',
          date: 'jan 2018 - may 2020',
          desc: 'O levels',
          link: '#',
        },
      ],
    }
  },
}
</script>
<style scoped>
#history {
  margin: 60px 0px;
  min-height: 100vh;
  position: relative;
  background: #171819
    url(https://wallpaperhunt.net/save/wallpaper?f=24577-4k-minimalist-wallpaper-3840x2160-158074280832820.jpg)
    no-repeat fixed top;
  background-size: cover;
}
#history:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
}
p.text-h6 {
  color: white;

  position: relative;
  padding: 20px 0px 0px;
  font-size: 17px !important;
  font-weight: 600;
}
.d-flex {
  flex: 1 1;
  margin: auto;
  justify-content: center;
}
.d-flex > div {
  width: 40%;
}
</style>
