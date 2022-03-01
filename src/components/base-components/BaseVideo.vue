<template>
  <div>
    <video id="video" autoplay muted></video>
    <div class="dialog" v-if="access">
      <p>
        Access denied. Please allow the access to your camera and reload.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    access() {
      return this.$store.getters['accessDenied'];
    },
  },
};
</script>

<style scoped>
video {
  width: 560px;
  height: 420px;
  border: 2px solid white;
  border-radius: 1rem;
  margin: 1rem 1rem 1rem 0;
  background-color: black;
}
.dialog {
  position: fixed;
  top: 19rem;
  width: 20rem;
  height: 3rem;
  left: auto;
  margin-left: 7rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 10;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}
p {
  margin-top: 0;
  font-weight: 500;
  font-size: 1.2rem;
}
</style>
