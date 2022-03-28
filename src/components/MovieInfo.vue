<template>
  <div>
    <span>{{ movie.title }}</span>
    <img :src="imgPath(movie.poster_path, 'w500')" alt="" />
  </div>
</template>

<script>
import { makeImagePath } from "../utils/utils";
export default {
  name: "MovieInfo",
  props: {
    movie: {
      type: Object,
    },
  },
  methods: {
    imgPath(url, format) {
      return makeImagePath(url, format);
    },
  },
};
</script>

<style></style>
