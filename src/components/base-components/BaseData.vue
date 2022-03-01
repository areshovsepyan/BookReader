<template>
  <div>
    <div class="text-container">
      <pre id="text-area"></pre>
    </div>
    <div class="paragraph">
      <p>
        Please turn on the camera, align the text in front off it and push
        <a @click="recognize">recognize</a>
      </p>
      <button v-if="!cameraIsOn" @click="turnOn">Turn On</button>
      <button v-else @click="turnOff">Turn Off</button>
      <button @click="recognize">Recognize</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    turnOn() {
      this.$store.dispatch('cameraOn');
    },
    turnOff() {
      this.$store.dispatch('cameraOff');
    },
    recognize() {
      this.$store.dispatch('createCanvas');
    },
  },
  computed: {
    cameraIsOn() {
      return this.$store.getters['isCameraOn'];
    },
  },
};
</script>

<style scoped>
.text-container {
  width: 350px;
  height: 295px;
  border: 2px solid white;
  border-radius: 1rem;
  margin-top: -0.2rem;
  margin-bottom: 0.8rem;
}

pre {
  margin-top: 0.3rem;
  margin-left: 1rem;
  font-size: 1rem;
  font-family: inherit;
  width: 90%;
  height: 285px;
  white-space: pre-wrap;
  font-weight: 500;
  overflow: scroll;
}

.paragraph {
  border: 2px solid white;
  border-radius: 1rem;
  width: 350px;
  height: 105px;
}

p {
  font-weight: bold;
  line-height: 1.2rem;
}

button {
  width: 8rem;
  height: 1.7rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: #057d9f;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: 1rem;
}

button:hover {
  text-decoration: underline #02151b;
  color: #02151b;
}
a {
  color: #057d9f;
  cursor: pointer;
}
a:hover {
  color: black;
}
</style>
