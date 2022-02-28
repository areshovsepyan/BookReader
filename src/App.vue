<template>
  <TheHeader />
  <router-view v-slot="{ Component }">
    <transition name="fade-button" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('./css/fonts.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
  transform: translateX(-400px)
}
.fade-button-enter-active,
.fade-button-leave-active {
  transition: all 0.7s ease-in-out;
  transform: translateX(-200px)
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
