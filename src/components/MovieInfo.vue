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
  methods: {
    imgPath(url, format) {
      return makeImagePath(url, format);
    },
  },
  props: {
    movie: {
      type: Object,
    },
  },
};
</script>

<style></style>
