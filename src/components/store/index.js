import { createStore } from 'vuex';
import { createWorker } from 'tesseract.js';

import storeMutations from './mutations.js';
import storeActions from './actions.js';
import storeGetters from './getters.js';

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
  mutations: storeMutations,
  actions: storeActions,
  getters: storeGetters,
});

export default store;
