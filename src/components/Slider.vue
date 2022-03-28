<template>
  <div id="slider">
    <h1>{{ title }}</h1>
    <MovieInfo
      v-for="movie in getItems"
      :key="movie.id"
      :movie="movie"
    ></MovieInfo>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieInfo from "../components/MovieInfo.vue";

export default {
  name: "SliderWrapper",
  components: {
    MovieInfo,
  },
  props: {
    actionType: {},
    title: {
      type: String,
      required: true,
    },
  },

  // beforeMount() {
  //   console.log(typeof this.actionType);
  // },

  mounted() {
    this.$store.dispatch(this.actionType);
  },
  computed: {
    getItems() {
      return this.$store.getters[this.actionType];
    },
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
