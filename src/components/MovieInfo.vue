<template>
  <div class="wrapper" :style="imgPath(movie.poster_path, 'w500')">
    <article>
      <div>{{ movie.title || movie.original_name }}</div>
    </article>
    <div style="width: 300px; height: 300px"></div>
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
      return `background-image : url("${makeImagePath(url, format)}"`;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  background-size: cover;
  background-position: center center;
  width: 300px;
  height: 500px;
  margin: 0 1rem;
  border-radius: 1rem;
  article {
    position: absolute;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    bottom: 3%;
    div {
      color: white;
      font-weight: 500;
      font-size: 2rem;
    }
  }
}

img {
  width: 150px;
  border-radius: 1rem;
}
</style>
