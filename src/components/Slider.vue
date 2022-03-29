<template>
  <section>
    <h1>{{ title }}</h1>
    <div id="slider">
      <MovieInfo
        v-for="movie in getItems"
        :key="movie.id"
        :movie="movie"
      ></MovieInfo>
    </div>
  </section>
</template>

<script>
import { makeGetterAction } from "@/utils/utils";
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

  mounted() {
    this.$store.dispatch(this.actionType);
  },
  computed: {
    getItems() {
      const type = makeGetterAction(this.actionType);
      return this.$store.getters[type];
    },
  },
};
</script>

<style lang="scss">
section {
  display: flex;
  flex-direction: column;
  #slider {
    padding: 50px 10px;
    /* white-space: nowrap; */
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 5px; */
    width: 100%;
  }
}
</style>
