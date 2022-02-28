import { createStore } from 'vuex';
// import { createWorker } from 'tesseract.js';

// const worker = createWorker({
//   logger: m => console.log(m),
// });

const store = createStore({
  state() {
    return {
      img: {},
      textRendered: '',
    };
  },
  mutations: {},
  actions: {
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
  getters: {},
});

export default store;
