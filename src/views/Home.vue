<template>
  <div class="wrapper">
    <slider :actionType="FETCH_MOVIE_NOWPLAYING" title="Now Playing"></slider>
    <slider :actionType="FETCH_MOVIE_TOPRATED" title="Top Rated"></slider>
    <slider :actionType="FETCH_MOVIE_UPCOMING" title="Upcoming"></slider>
  </div>
</template>

<script>
import {
  FETCH_MOVIE_NOWPLAYING,
  FETCH_MOVIE_TOPRATED,
  FETCH_MOVIE_UPCOMING,
} from "@/store/actions.type";
import { makeImagePath } from "../utils/utils";

import Slider from "../components/Slider.vue";

// Component name "Home" should always be multi-word -> Lint에서 Vue 컴포넌트명은 Multi-word를 권장함
// -> html 요소와 분리하기 위함
export default {
  name: "HomePage",
  components: {
    Slider,
  },
  data() {
    return {
      FETCH_MOVIE_NOWPLAYING,
      FETCH_MOVIE_TOPRATED,
      FETCH_MOVIE_UPCOMING,
    };
  },
  methods: {
    imgPath(url, format) {
      return makeImagePath(url, format);
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}
</style>
