<template>
  <div id="slider">
    <h1>Now Playing</h1>
    <MovieInfo
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    ></MovieInfo>
  </div>
</template>

<script>
import MovieInfo from "../components/MovieInfo.vue";

export default {
  name: "Slider",
  components: {
    MovieInfo,
  },
};
</script>

<style>
#slider {
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;
}
</style>
