<template>
  <base-badge>
    <BaseVideo />
    <BaseText />
  </base-badge>
</template>

<script>
import BaseVideo from '../components/media/BaseVideo.vue';
import BaseText from '../components/media/BaseText.vue';

export default {
  components: {
    BaseVideo,
    BaseText,
  },
};
</script>

<style scoped></style>
