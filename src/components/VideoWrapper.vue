<template>
  <div v-if="type" class="wrapper">
    <slider :actionType="FETCH_MOVIE_NOWPLAYING" title="Now Playing"></slider>
    <slider :actionType="FETCH_MOVIE_TOPRATED" title="Top Rated"></slider>
    <slider :actionType="FETCH_MOVIE_UPCOMING" title="Upcoming"></slider>
  </div>
  <div v-else class="wrapper">
    <slider :actionType="FETCH_TV_POPULAR" title="Popular Shows"></slider>
    <slider :actionType="FETCH_TV_AIRING" title="Airing Tvs"></slider>
    <slider :actionType="FETCH_TV_TOPRATED" title="Top Rated"></slider>
  </div>
</template>

<script>
import {
  FETCH_MOVIE_NOWPLAYING,
  FETCH_MOVIE_TOPRATED,
  FETCH_MOVIE_UPCOMING,
  FETCH_TV_POPULAR,
  FETCH_TV_AIRING,
  FETCH_TV_TOPRATED,
} from "@/store/actions.type";

import Slider from "../components/Slider.vue";

// Component name "Home" should always be multi-word -> Lint에서 Vue 컴포넌트명은 Multi-word를 권장함
// -> html 요소와 분리하기 위함
export default {
  name: "HomePage",
  props: {
    type: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Slider,
  },
  data() {
    return {
      FETCH_MOVIE_NOWPLAYING,
      FETCH_MOVIE_TOPRATED,
      FETCH_MOVIE_UPCOMING,
      FETCH_TV_POPULAR,
      FETCH_TV_AIRING,
      FETCH_TV_TOPRATED,
    };
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}
</style>
