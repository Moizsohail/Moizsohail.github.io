<template>
  <div>
    <v-dialog
      :value="Object.keys(obj).length !== 0"
      @input="$emit('close')"
      width="800"
    >
      <v-card class="d-flex">
        <v-carousel
          class="flex"
          :continuous="false"
          :cycle="true"
          show-arrows
          hide-delimiter-background
          delimiter-icon="mdi-minus"
        >
          <v-carousel-item v-for="x in obj.img" :key="x">
            <v-img :src="x" height="100%" class="grey darken-4">
              <template v-slot:placeholder>
                <v-skeleton-loader
                  type="image,image,image"
                  min-height="400px"
                /> </template
            ></v-img>

            <!-- <v-sheet  height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet> -->
          </v-carousel-item>
        </v-carousel>
        <v-card-text>
          <div class="text">
            <h4>{{ obj.title }}</h4>
            <p>
              {{ obj.desc }}
            </p>
            <div v-show="obj.link" class="pt-5">
              <v-btn text :color="obj.color" tag="a">Link</v-btn>
            </div>
          </div>
        </v-card-text>
        <!-- <v-divider></v-divider> -->
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.text {
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* animation: slide-right 1s ease; */
}
@keyframes slide-right {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  60% {
    transform: translateX(0);
  }
  100% {
    opacity: 1;
  }
}
.text h4 {
  animation: slide-right 1s ease;
  animation-delay: 0s;
  font-size: 20px;
  margin-bottom: 10px;
}
.text p {
  animation: slide-right 1s ease;
  animation-delay: 0.15s;
  animation-fill-mode: both;
}
</style>
