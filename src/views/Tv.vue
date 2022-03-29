<template>
  <div class="wrapper">
    <video-wrapper :type="false"></video-wrapper>
  </div>
</template>

<script>
import VideoWrapper from "../components/VideoWrapper.vue";

// Component name "Home" should always be multi-word -> Lint에서 Vue 컴포넌트명은 Multi-word를 권장함
// -> html 요소와 분리하기 위함
export default {
  name: "TvShow",
  components: {
    VideoWrapper,
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}
</style>
