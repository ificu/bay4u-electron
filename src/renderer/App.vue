<template>
  <main>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  /* CSS */
  body {
  margin: 0;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Noto Sans KR', sans-serif;
  /*font-family: 'Nanum Gothic', sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
