<template>
  <base-badge>
    <BaseVideo />
    <BaseData />
  </base-badge>
</template>

<script>
import BaseVideo from '../components/base-components/BaseVideo.vue';
import BaseData from '../components/base-components/BaseData.vue';

export default {
  components: {
    BaseVideo,
    BaseData,
  },
  computed: {},
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
