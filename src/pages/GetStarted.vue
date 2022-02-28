<template>
  <base-badge>
    <BaseVideo />
    <BaseData />
  </base-badge>
</template>

<script>
import BaseVideo from '../components/media/BaseVideo.vue';
import BaseData from '../components/media/BaseData.vue';

export default {
  components: {
    BaseVideo,
    BaseData,
  },
  mounted() {
    document.addEventListener('keypress', async e => {
      if (e.code === 'Space' && window.location.pathname === '/get-started') {
        this.$store.dispatch('createCanvas');
      }
    });
  },
};
</script>

<style scoped></style>
