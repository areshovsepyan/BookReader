import { createStore } from 'vuex';
import { createWorker } from 'tesseract.js';

const store = createStore({
  state() {
    return {
      receivedObject: {},
      textElement: null,
      localStream: null,
      videoElement: null,
      canvasImage: null,
      cameraIsOn: false,
      worker: createWorker(),
    };
  },
  mutations: {
    async cameraOn(state) {
      try {
        state.videoElement = document.getElementById('video');
        state.textElement = document.getElementById('text-area');
        state.localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        state.videoElement.srcObject = state.localStream;
        state.cameraIsOn = true;
      } catch (error) {
        console.log(error);
      }
    },
    cameraOff(state) {
      state.videoElement = null;
      state.textElement = null;
      state.receivedObject = {};
      state.cameraIsOn = false;
      state.localStream.getTracks().forEach(track => track.stop());
    },
    async createCanvas(state) {
      try {
        if (state.cameraIsOn) {
          state.canvasImage = document.createElement('canvas');
          state.canvasImage.width = 560;
          state.canvasImage.height = 420;
          state.canvasImage
            .getContext('2d')
            .drawImage(state.videoElement, 0, 0, 560, 420);

          await state.worker.load();
          await state.worker.loadLanguage('eng');
          await state.worker.initialize('eng');

          state.receivedObject = await state.worker.recognize(
            state.canvasImage
          );
          state.textElement.textContent = state.receivedObject.data.text;
          speechSynthesis.speak(
            new SpeechSynthesisUtterance(
              state.textElement.textContent.replace(/\s/g, ' ')
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  actions: {
    cameraOn(context) {
      context.commit('cameraOn');
    },
    cameraOff(context) {
      context.commit('cameraOff');
    },
    createCanvas(context) {
      context.commit('createCanvas');
    },
    // createCanvas() {},
    // recognize: async () => {
    //   const img = document.getElementById('text-img');
    //   console.log(img);
    //   await worker.load();
    //   await worker.loadLanguage('eng');
    //   await worker.initialize('eng');

    //   const {
    //     data: { text },
    //   } = await worker.recognize(img);
    //   console.log(text);
    // },
  },
  getters: {
    isCameraOn(state) {
      return state.cameraIsOn;
    },
  },
});

export default store;
