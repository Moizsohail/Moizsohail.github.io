<template>
  <v-card class="single-card" :href="data.link" target="_blank">
    <v-card class="thumbnail" elevation="6">
      <v-img class="img" :src="data.thumbnail" />
    </v-card>
    <h5 class="text-h5 title">{{ data.title }}</h5>
    <p class="subtitle">{{ description }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'lg', // "xs" || "sm" || "md" || "lg"
    },
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    description() {
      return this.data.description.replace(/<[^>]+>/g, '')
    },
  },
}
</script>

<style lang="scss" scoped>
.single-card {
  width: 100%;
  margin: 0px auto;
  border-top: 4px solid #ff3366;
  padding: 39px 32px;
  cursor: pointer;
  transition: 0.5s ease-out;
  background: #282828;
}
.single-card:hover {
  transform: translateY(-9px);
}
.title {
  margin-bottom: 12px !important;
  transition: 0.5s ease-out;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  color: #d8d8d8;
  font-size: 1.4em !important;
}

.subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  font-size: 0.9em;
  color: rgba(245, 245, 245, 0.76);
  margin-bottom: 2px !important;
}
.thumbnail {
  margin-bottom: 30px;
}
.img {
  width: 100%;
  max-height: 220px;
  border-radius: 5px;
}
/* $lines: 2 !default;
@mixin card-style($size) {
  @if $size == 'lg' {
    .subtitle {
      -webkit-line-clamp: 4;
      line-clamp: 4;
    }
    .thumbnail .img {
      height: 100px;
    }
  } @else {
    @error "hi";
  }
  .single-card {
    width: 90%;
    margin: 0px auto;
  }
  .subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .thumbnail {
    width: 100%;
  }
}
.lg {
  @include card-style('lg');
}
.md {
  @include card-style('lg');
} */
</style>
