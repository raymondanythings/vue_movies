<template>
  <div class="wrapper">
    <div v-if="!isLoading">
      <div id="slider">
        <h1>Now Playing</h1>
        <MovieInfo
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        ></MovieInfo>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_MOVIE_NOWPLAYING } from "@/store/actions.type";
import { mapGetters } from "vuex";
import { makeImagePath } from "../utils/utils";
import MovieInfo from "../components/MovieInfo.vue";

// Component name "Home" should always be multi-word -> Lint에서 Vue 컴포넌트명은 Multi-word를 권장함
// -> html 요소와 분리하기 위함
export default {
  name: "HomePage",
  components: {
    MovieInfo,
  },
  methods: {
    imgPath(url, format) {
      return makeImagePath(url, format);
    },
  },
  mounted() {
    this.$store.dispatch(FETCH_MOVIE_NOWPLAYING);
  },
  computed: {
    ...mapGetters(["movies", "isLoading"]),
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}
</style>
