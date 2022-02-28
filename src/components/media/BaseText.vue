<template>
  <div>
    <div class="text-area">
      <pre data-text></pre>
    </div>
    <div class="paragraph">
      <p>Please push the button to recognize</p>
      <button @click="recognize">Recognize</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    recognize() {
      
    },
  },
};
</script>

<style scoped>
.text-area {
  width: 350px;
  height: 330px;
  border: 2px solid white;
  border-radius: 1rem;
  margin-top: -0.65rem;
  margin-bottom: 1rem;
}

pre {
  font-size: 2rem;
  font-family: inherit;
  width: 100%;
  white-space: pre-wrap;
}

.paragraph {
  border: 2px solid white;
  border-radius: 1rem;
  width: 350px;
  height: 75px;
}

p {
  font-weight: bold;
  line-height: 0.5rem;
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
}

button:hover {
  text-decoration: underline #02151b;
  color: #02151b;
}
</style>
