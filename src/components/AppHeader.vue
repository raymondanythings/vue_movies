<template>
  <header>
    <div class="header__wrapper">
      <div class="header__left">
        <div class="logo">logo</div>
        <div class="movie">Movie</div>
        <div class="tv">Tv</div>
      </div>
      <div class="header__right"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss">
header {
  background-color: gray;
  width: 100%;
  .header__wrapper {
    /* display: flex;
    justify-content: space-between; */
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    .header__left {
      display: flex;
      div {
        display: flex;
        align-items: center;
        border: 1px solid black;
        margin-right: 15px;
      }
      .logo {
        margin-right: 50px;
      }
    }
  }
}
</style>
