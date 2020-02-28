<template>
  <footer class="foot-wrapper">
    <div class="copy">
      Copyright © 2020 Cleveland Injector Hospital
    </div>
    <div class="social-links">
      <i class="material-icons">home</i>
      <i class="material-icons">dns</i>
      <i class="material-icons">https</i>
    </div>
    <div class="phone-num">
      <!-- <i class="material-icons">phone</i> -->
      <span>216.219.2263</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
  .foot-wrapper {
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    width: 100%;
    font-size: .8em;
    background-color: white;
    color: #787878;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .copy {
    line-height: 30px;
    width: 300px;
  }

  .phone-num {
    font-size: 1.3em;
    width: 300px;
    text-align: end;
  }

  .material-icons {
    padding-top: 7px;
  }
</style>